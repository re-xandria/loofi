package com.radicalentity.Loofi.config;

import com.radicalentity.Loofi.models.Role;
import com.radicalentity.Loofi.models.User;
import com.radicalentity.Loofi.repositories.UserRepository;
import com.radicalentity.Loofi.services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class SeedDataConfig implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;

    @Override
    public void run(String... args) throws Exception {

        if (userRepository.count() == 0) {

            User admin = User
                    .builder()
                    .displayName("Admin")
                    .email("admin@email.com")
                    .password(passwordEncoder.encode("1Password*"))
                    .role(Role.ROLE_ADMIN)
                    .build();

            userService.save(admin);
            log.debug("Created admin user - {} ", admin);
        }
    }
}
