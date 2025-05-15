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
public class DashboardControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testChangeEmail() throws Exception {
        //Create test user
        mockMvc.perform(MockMvcRequestBuilders.post("/api/auth/sign-up")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"displayName\":\"Tester\",\"email\":\"test@email.com\",\"password\":\"1Password*\"}"));

        String emailJson = "{\"currentEmail\":\"test@email.com\",\"newEmail\":\"test@gmail.com\"}";

        ResultActions result = mockMvc.perform(MockMvcRequestBuilders.post("/api/dashboard/email-settings")
                .contentType(MediaType.APPLICATION_JSON)
                .content(emailJson));

        //Delete Test User
        mockMvc.perform(MockMvcRequestBuilders.post("/api/dashboard/delete-settings")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"email\":\"test@gmail.com\"}"));

        result.andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testChangePassword() throws Exception {
        //Create test user
        mockMvc.perform(MockMvcRequestBuilders.post("/api/auth/sign-up")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"displayName\":\"Tester\",\"email\":\"test@email.com\",\"password\":\"1Password*\"}"));

        String passwordJson = "{\"email\":\"test@email.com\",\"password\":\"MyN3wPassword*\"}";

        ResultActions result = mockMvc.perform(MockMvcRequestBuilders.post("/api/dashboard/password-settings")
                .contentType(MediaType.APPLICATION_JSON)
                .content(passwordJson));

        //Delete Test User
        mockMvc.perform(MockMvcRequestBuilders.post("/api/dashboard/delete-settings")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"email\":\"test@email.com\"}"));

        result.andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testDeleteUser() throws Exception {
        //Create test user
        mockMvc.perform(MockMvcRequestBuilders.post("/api/auth/sign-up")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"displayName\":\"Tester\",\"email\":\"test@email.com\",\"password\":\"1Password*\"}"));

        //Delete Test User
        ResultActions result = mockMvc.perform(MockMvcRequestBuilders.post("/api/dashboard/delete-settings")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"email\":\"test@email.com\"}"));

        result.andExpect(MockMvcResultMatchers.status().isOk());
    }

}
