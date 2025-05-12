package com.radicalentity.Loofi.controllers;

import com.radicalentity.Loofi.dto.UpdateRoleRequest;
import com.radicalentity.Loofi.models.User;
import com.radicalentity.Loofi.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.AccessDeniedException;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final UserService userService;

    @PostMapping("/update-role")
    public ResponseEntity<?> updateUserRole(@RequestBody UpdateRoleRequest request) throws AccessDeniedException {
        userService.updateUserRole(request);
        return ResponseEntity.ok("User role updated successfully.");
    }

    @GetMapping("get-admins")
    public List<User> getAdmins() { return userService.findAllAdmins(); }

}
