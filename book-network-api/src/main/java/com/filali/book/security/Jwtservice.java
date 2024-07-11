package com.filali.book.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class Jwtservice { // this class is responsible for handling JWT operation such as creating, parsing validating JWT tokens
    @Value("${application.security.jwt.secret-key}")
    private String secretKey;
    @Value("${application.security.jwt.expiration}")
    private Long jwtExpiration;

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String extractUsername(String token) {
        return extracClaim(token, Claims::getSubject);
    }

    public <T> T extracClaim(String token, Function<Claims, T> claimResolver) {
        final Claims claims = extractAllClaims(token);
        return claimResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) { //return claims from our token
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {

        return buildToken(extraClaims, userDetails, jwtExpiration);
    }

    private String buildToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails,
            Long jwtExpiration
    ) {
        var authorities = userDetails.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .toList();
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername()) // is the identifier of my token
                .setIssuedAt(new Date(System.currentTimeMillis())) // when this token was created
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration)) //for how long our token should be expired
                .claim("authorities", authorities)
                .signWith(getSignInKey()) // we need to sign our token with a key
                .compact(); // to generate the token
    }

    public boolean isTokenValid(String token, UserDetails userDetails) { // valid token method
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extracClaim(token, Claims::getExpiration);
    }


    private Key getSignInKey() { // decoding our signing key
        byte[] keyBytes = Decoders.BASE64.decode(secretKey); // decode the token
        return Keys.hmacShaKeyFor(keyBytes); // incoding
    }
}
