package com.filali.book.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class Jwtservice {
    private String secretKey;
    private Long jwtExpiration;

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
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

    private Key getSignInKey() { // decoding our signing key
        byte[] keyBytes = Decoders.BASE64.decode(secretKey); // decode the token
        return Keys.hmacShaKeyFor(keyBytes); // incoding
    }
}
