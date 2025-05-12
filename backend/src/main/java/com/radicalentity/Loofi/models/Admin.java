package com.radicalentity.Loofi.models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@NoArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorValue("Admin")
public class Admin extends User {

    public void changeUserRole(User user, Role role) {
        user.setRole(role);
    }

}
