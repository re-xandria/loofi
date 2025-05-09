package com.radicalentity.Loofi.models;

import jakarta.persistence.*;

//@Entity
//@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
//@DiscriminatorValue("ADMIN")
public class Admin extends User {

    public void changeUserRole(User user, Role role) {
        user.setRole(role);
    }

}
