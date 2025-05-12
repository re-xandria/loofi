package com.radicalentity.Loofi.dto;

import com.radicalentity.Loofi.models.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateRoleRequest {
    String adminEmail;
    String userEmail;
    Role role;
}
