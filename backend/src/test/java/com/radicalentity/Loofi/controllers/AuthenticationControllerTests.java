package com.radicalentity.Loofi.controllers;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class AuthenticationControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testSignIn() throws Exception {
        String userJson = "{\"email\":\"admin@email.com\",\"password\":\"1Password*\"}";

        ResultActions result = mockMvc.perform(MockMvcRequestBuilders.post("/api/auth/sign-in")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userJson));

        result.andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testSignUp() throws Exception {
        String userJson = "{\"displayName\":\"Tester\",\"email\":\"test@email.com\",\"password\":\"1Password*\"}";

        ResultActions result = mockMvc.perform(MockMvcRequestBuilders.post("/api/auth/sign-up")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userJson));

        result.andExpect(MockMvcResultMatchers.status().isOk());

        mockMvc.perform(MockMvcRequestBuilders.post("/api/dashboard/delete-settings")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"email\":\"test@email.com\"}"));
    }

}
