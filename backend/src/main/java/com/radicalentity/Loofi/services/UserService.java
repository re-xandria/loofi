package com.radicalentity.Loofi.services;

import com.radicalentity.Loofi.dto.*;
import com.radicalentity.Loofi.models.User;
import com.radicalentity.Loofi.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Bean
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) {
                return userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("Email not found"));
            }
        };
    }

    public User save(User newUser) {
        if (newUser.getId() == null) {
            newUser.setCreatedAt(LocalDateTime.now());
        }

        newUser.setUpdatedAt(LocalDateTime.now());
        return userRepository.save(newUser);
    }

    public String changePassword(PasswordRequest request) {
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        if (!user.getPassword().equals(request.getPassword())) {
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            userRepository.save(user);
            return "Password changed";
        }
        return "Passwords are the same";
    }

    public String changeEmail(EmailRequest request) {
        User user = userRepository.findByEmail(request.getCurrentEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        if (!user.getEmail().equals(request.getNewEmail())) {
            user.setEmail(request.getNewEmail());
            userRepository.save(user);
            return "Email changed";
        }
        return "Emails are the same";
    }

    public String deleteUser(DeleteRequest request) {
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        if (user.getId() != null) {
            userRepository.delete(user);
            return "User deleted";
        }
        return "User not found";
    }

    public List<User> findUsers(SearchRequest request) {
        if (!request.getSearch().isEmpty()) {
            List<User> users = userRepository.findAll();
            users.removeIf(user ->
                    !(user.getEmail().toLowerCase().contains(request.getSearch().toLowerCase()) ||
                            user.getDisplayName().toLowerCase().contains(request.getSearch().toLowerCase()))
            );
            users.sort(Comparator.comparing(User::getEmail));
            return users;
        }
        return null;
    }

    public Boolean isAdmin(UserRequest request) {
        if (request.getEmail() != null && !request.getEmail().isEmpty()) {
            User user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
            return user.getRole().toString().equals("ROLE_ADMIN");
        }
        return null;
    }

    public String addUser(FriendRequest request) {
        if (!request.getRequestorEmail().isEmpty() && !request.getUserEmail().isEmpty()) {
            User requestor = userRepository.findByEmail(request.getRequestorEmail()).orElseThrow(() -> new UsernameNotFoundException("Requestor not found"));
            User user = userRepository.findByEmail(request.getUserEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
            if (!requestor.getFriends().contains(user) && !user.getFriends().contains(requestor)) {
                requestor.getFriends().add(user);
                user.getFriends().add(requestor);
                userRepository.save(requestor);
                userRepository.save(user);
                return "User added as friend";
            }
            return "User already added as friend";
        }
        return "Could not add user as friend";
    }

    public String removeUser(FriendRequest request) {
        if (!request.getRequestorEmail().isEmpty() && !request.getUserEmail().isEmpty()) {
            User requestor = userRepository.findByEmail(request.getRequestorEmail()).orElseThrow(() -> new UsernameNotFoundException("Requestor not found"));
            User user = userRepository.findByEmail(request.getUserEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
            requestor.getFriends().remove(user);
            user.getFriends().remove(requestor);
            userRepository.save(requestor);
            userRepository.save(user);
            return "User deleted as friend";
        }
        return "Could not remove user as friend";
    }

    // only using RoleRequest because it already takes an email
    public Set<User> findFriends(UserRequest request) {
        if (request.getEmail() != null && !request.getEmail().isEmpty()) {
            User user = userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
            return user.getFriends();
        }
        return null;
    }

}
