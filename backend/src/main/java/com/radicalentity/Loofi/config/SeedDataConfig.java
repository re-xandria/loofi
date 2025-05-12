package com.radicalentity.Loofi.config;

import com.radicalentity.Loofi.models.Admin;
import com.radicalentity.Loofi.models.Role;
import com.radicalentity.Loofi.models.User;
import com.radicalentity.Loofi.repositories.UserRepository;
import com.radicalentity.Loofi.services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

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

            Admin admin = Admin
                    .builder()
                    .displayName("Admin")
                    .email("admin@email.com")
                    .password(passwordEncoder.encode("1Password*"))
                    .role(Role.ROLE_ADMIN)
                    .gamesPlayed(57)
                    .achievementsEarned(4)
                    .build();

            userService.save(admin);
            log.debug("Created admin user - {} ", admin);

            User user1 = User
                    .builder()
                    .displayName("Alice Wonder")
                    .email("alice.w@ymail.com")
                    .password(passwordEncoder.encode("P@ssword123"))
                    .role(Role.ROLE_USER)
                    .gamesPlayed(12)
                    .achievementsEarned(1)
                    .build();

            userService.save(user1);
            log.debug("Created user - {} ", user1);

            User user2 = User
                    .builder()
                    .displayName("Bob Swift")
                    .email("bob.swift@gmail.com")
                    .password(passwordEncoder.encode("Qwerty!2024"))
                    .role(Role.ROLE_USER)
                    .gamesPlayed(19)
                    .achievementsEarned(2)
                    .build();

            userService.save(user2);
            log.debug("Created user - {} ", user2);

            User user3 = User
                    .builder()
                    .displayName("Clara Newton")
                    .email("clara.newton@outlook.com")
                    .password(passwordEncoder.encode("12345*Abcde"))
                    .role(Role.ROLE_USER)
                    .gamesPlayed(64)
                    .achievementsEarned(5)
                    .build();

            userService.save(user3);
            log.debug("Created user - {} ", user3);

            User user4 = User
                    .builder()
                    .displayName("Daniel Forge")
                    .email("daniel.f@gmail.com")
                    .password(passwordEncoder.encode("MyPass@890"))
                    .role(Role.ROLE_USER)
                    .gamesPlayed(36)
                    .achievementsEarned(3)
                    .build();

            userService.save(user4);
            log.debug("Created user - {} ", user4);

            User user5 = User
                    .builder()
                    .displayName("Eva Luna")
                    .email("eva.luna@gmail.com")
                    .password(passwordEncoder.encode("Sunshine#12"))
                    .role(Role.ROLE_USER)
                    .build();

            userService.save(user5);
            log.debug("Created user - {} ", user5);

            User user6 = User
                    .builder()
                    .displayName("Felix Stone")
                    .email("felix.s@gmail.com")
                    .password(passwordEncoder.encode("RockSolid99!"))
                    .role(Role.ROLE_USER)
                    .gamesPlayed(57)
                    .achievementsEarned(4)
                    .build();

            userService.save(user6);
            log.debug("Created user - {} ", user6);

            User user7 = User
                    .builder()
                    .displayName("Grace Hopper")
                    .email("gracehopper@ymail.com")
                    .password(passwordEncoder.encode("Ghopper#2025"))
                    .role(Role.ROLE_USER)
                    .build();

            userService.save(user7);
            log.debug("Created user - {} ", user7);

            User user8 = User
                    .builder()
                    .displayName("Henry Bolt")
                    .email("henry.bolt@outlook.com")
                    .password(passwordEncoder.encode("H3nryBolt!"))
                    .role(Role.ROLE_USER)
                    .gamesPlayed(21)
                    .achievementsEarned(2)
                    .build();

            userService.save(user8);
            log.debug("Created user - {} ", user8);

            User user9 = User
                    .builder()
                    .displayName("Isla Bloom")
                    .email("islabloom@ymail.com")
                    .password(passwordEncoder.encode("Bloom2024*"))
                    .role(Role.ROLE_USER)
                    .gamesPlayed(3)
                    .build();

            userService.save(user9);
            log.debug("Created user - {} ", user9);

            User user10 = User
                    .builder()
                    .displayName("Jack Orion")
                    .email("jack.o@outlook.com")
                    .password(passwordEncoder.encode("Orion!Jack12"))
                    .role(Role.ROLE_USER)
                    .build();

            userService.save(user10);
            log.debug("Created user - {} ", user10);

            admin.setFriends(List.of(user1, user4, user5, user7, user9));
            userService.save(admin);

        }
    }
}
