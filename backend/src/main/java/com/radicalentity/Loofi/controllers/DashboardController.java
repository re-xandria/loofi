package com.radicalentity.Loofi.controllers;

import com.radicalentity.Loofi.dto.JwtAuthenticationResponse;
import com.radicalentity.Loofi.dto.AccountRequest;
import com.radicalentity.Loofi.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final UserService userService;

    @PostMapping("/password-settings")
    public String changePassword(@RequestBody AccountRequest request) {
        return userService.changePassword(request);
    }

}
