package com.nutrifact.controllers;

import com.nutrifact.model.Alimento;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(AlimentosController.class)
class AlimentosControllerTest {

    AlimentosController underTest;

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        underTest = new AlimentosController();
    }

    @Test
    void getAlimentos() throws Exception {

        mockMvc.perform(get("/api/alimentos/" + 1L).contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("abacaxi"));
    }

    @Test
    void testGetAlimentos() {
    }

    @Test
    void postAlimentos() {
    }
}