package com.radicalentity.Loofi.controllers;

import com.radicalentity.Loofi.dto.FriendRequest;
import com.radicalentity.Loofi.dto.UserRequest;
import com.radicalentity.Loofi.models.User;
import com.radicalentity.Loofi.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/friends")
public class FriendNetworkController {

    private final UserService userService;

    @PostMapping("/add-user")
    public String addUser(@RequestBody FriendRequest request) { return userService.addUser(request); }

    @PostMapping("/remove-user")
    public String removeUser(@RequestBody FriendRequest request) { return userService.removeUser(request); }

    @PostMapping("/find-friends")
    public List<User> findFriends(@RequestBody UserRequest request) { return userService.findFriends(request); }

}
