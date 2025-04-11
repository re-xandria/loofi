package com.radicalentity.Loofi.controllers;

import com.radicalentity.Loofi.dto.JwtAuthenticationResponse;
import com.radicalentity.Loofi.dto.SignInRequest;
import com.radicalentity.Loofi.dto.SignUpRequest;
import com.radicalentity.Loofi.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/sign-up")
    public JwtAuthenticationResponse signup(@RequestBody SignUpRequest request) {
        return authenticationService.signup(request);
    }

    @PostMapping("/sign-in")
    public JwtAuthenticationResponse signin(@RequestBody SignInRequest request) {
        return authenticationService.signin(request);
    }

}
