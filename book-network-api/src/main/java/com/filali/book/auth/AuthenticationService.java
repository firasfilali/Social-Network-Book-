package com.filali.book.auth;

import com.filali.book.email.EmailService;
import com.filali.book.email.EmailTemplateName;
import com.filali.book.role.RoleRepository;
import com.filali.book.security.Jwtservice;
import com.filali.book.user.Token;
import com.filali.book.user.TokenRepository;
import com.filali.book.user.User;
import com.filali.book.user.UserRepository;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final AuthenticationManager authenticationManager;
    private final EmailService emailService;
    private final Jwtservice jwtservice;
    @Value("${application.mailing.frontend.activation-url}")
    private String activationUrl;

    public void register(RegistrationRequest request) throws MessagingException {
        var userRole = roleRepository.findByName("USER")
                // todo - better exception handling
                .orElseThrow(() -> new IllegalStateException("ROLE USER was not initiated"));
        //create a user object
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .accountLocked(false)
                .enabled(false)
                .roles(List.of(userRole))
                .build();
        userRepository.save(user);
        sendValidationEmail(user);
    }

    private void sendValidationEmail(User user) throws MessagingException {

        var newToken = generateAndSaveActivationToken(user);
        emailService.sendEmail(
                user.getEmail(),
                user.getFullName(),
                EmailTemplateName.ACTIVATE_ACCOUNT,
                activationUrl,
                newToken,
                "Account activation"
        );
    }

    private String generateAndSaveActivationToken(User user) {
        String generatedToken = generateActivationCode(6);
        var token = Token.builder()
                .token(generatedToken)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(15))
                .user(user)
                .build();
        tokenRepository.save(token);

        return generatedToken;
        
    }

    private String generateActivationCode(int length) { //length: This is an integer parameter that defines the desired length of the activation code.
        String characters = "0123456789"; //This String contains the set of characters that can be used in the code. In this case, it's limited to numbers (0-9).
        StringBuilder codeBuilder = new StringBuilder(); // This is a StringBuilder object used to efficiently build the activation code string.

        SecureRandom secureRandom = new SecureRandom(); //creates a secure random number generator object.
        // This is important to ensure the randomness of the generated code.
        for (int i = 0; i < length; i++) {
            int randomIndex = secureRandom.nextInt(characters.length());//generates a random integer between 0 (inclusive) and the length of the characters string (exclusive).
            // This index will be used to pick a character from the characters string.
            codeBuilder.append(characters.charAt(randomIndex));
        }

        return codeBuilder.toString();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        var auth = authenticationManager.authenticate( //create an authentication using the authenticationManager bean
                new UsernamePasswordAuthenticationToken( // represent an authentication attempt
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var claims = new HashMap<String, Object>(); // store claims for the jwt
        var user = ((User) auth.getPrincipal());
        claims.put("fullName", user.getFullName()); // add the user full name to the claims

        var jwtToken = jwtservice.generateToken(claims, (User) auth.getPrincipal());
        return AuthenticationResponse.builder()
                .token(jwtToken) // Sets the generated JWT token as the response's token.
                .build();

    }

    public void activateAccount(String token) throws MessagingException {
        Token savedToken = tokenRepository.findByToken(token)
                // todo exception has to be defined
                .orElseThrow(() -> new RuntimeException("Invalid token"));
        if (LocalDateTime.now().isAfter(savedToken.getExpiresAt())) {
            sendValidationEmail(savedToken.getUser());
            throw new RuntimeException("Activation token has expired. A new token has been send to the same email address");
        }
        var user = userRepository.findById(savedToken.getUser().getId())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        user.setEnabled(true);
        userRepository.save(user);
        savedToken.setValidatedAt(LocalDateTime.now());
        tokenRepository.save(savedToken);
    }
}
