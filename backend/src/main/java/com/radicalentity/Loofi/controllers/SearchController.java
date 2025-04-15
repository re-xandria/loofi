package com.radicalentity.Loofi.controllers;

import com.radicalentity.Loofi.dto.SearchRequest;
import com.radicalentity.Loofi.models.User;
import com.radicalentity.Loofi.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/search")
@RequiredArgsConstructor
public class SearchController {

    private final UserService userService;

    @PostMapping("/search-users")
    public List<User> findUsers(@RequestBody SearchRequest request) {
        return userService.findUsers(request);
    }

}
