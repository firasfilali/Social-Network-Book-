package com.filali.book.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@RequiredArgsConstructor
@Service
public class JwtFilter extends OncePerRequestFilter {

    private final Jwtservice jwtService;
    private final UserDetailsService userDetailsService; // this service is responsable for loading user details based on the username

    @Override
    protected void doFilterInternal( // every time we have a request this method will be executed
                                     @NonNull HttpServletRequest request,
                                     @NonNull HttpServletResponse response,
                                     @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        if (request.getServletPath().contains("/api/v1/auth")) { //checks if the request path contains "/api/v1/auth". If it does, it skips the JWT processing and allows the request to proceed further
            filterChain.doFilter(request, response);
            return;
        }
        final String authHeader = request.getHeader(AUTHORIZATION); //the filter extracts the authorization header from the request.
        final String jwt;
        final String userEmail; // the user email that will extract from our token
        if (authHeader == null || !authHeader.startsWith("Bearer ")) { //this is not the token that we are looking for
            filterChain.doFilter(request, response);
            return;
        }
        jwt = authHeader.substring(7); //it extracts the JWT token from the header by removing the "Bearer " prefix.
        userEmail = jwtService.extractUsername(jwt);
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null){
            UserDetails userDetails = userDetailsService.loadUserByUsername(userEmail); // to load the user details based on the extracted username.
            if (jwtService.isTokenValid(jwt, userDetails)){// validate the token against my user details
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        //If the token is valid, it creates a UsernamePasswordAuthenticationToken object.
                        // This object represents a user authentication with a username and authorities.
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(//This adds details about the request like the IP address and session ID to the authentication object.
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken); // sets the authentication object in the Security Context using
                //This makes the user information available to other parts of the application.
            }

        }
        filterChain.doFilter(request, response);
    }
}
