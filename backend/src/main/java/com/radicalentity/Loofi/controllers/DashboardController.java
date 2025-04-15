package com.radicalentity.Loofi.controllers;

import com.radicalentity.Loofi.dto.DeleteRequest;
import com.radicalentity.Loofi.dto.EmailRequest;
import com.radicalentity.Loofi.dto.PasswordRequest;
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
    // will eventually need the PreAuthorize annotation to check token before executing
    public String changePassword(@RequestBody PasswordRequest request) {
        return userService.changePassword(request);
    }

    @PostMapping("/email-settings")
    // will eventually need the PreAuthorize annotation to check token before executing
    public String changeEmail(@RequestBody EmailRequest request) {
        return userService.changeEmail(request);
    }

    @PostMapping("/delete-settings")
    // will eventually need the PreAuthorize annotation to check token before executing
    public String deleteUser(@RequestBody DeleteRequest request) {
        return userService.deleteUser(request);
    }

}
