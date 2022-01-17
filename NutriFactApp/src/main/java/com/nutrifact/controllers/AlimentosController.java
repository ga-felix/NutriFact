package com.nutrifact.controllers;

import com.github.javafaker.service.FakeValuesService;
import com.github.javafaker.service.RandomService;
import com.nutrifact.model.Alimento;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/api/alimentos")
public class AlimentosController {

    @GetMapping
    public List<Alimento> getAlimentoById() {
        return Arrays.asList(new Alimento("Abacaxi", 1L), new Alimento("Pera", 2L), new Alimento("Mamão", 3L));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Alimento> getAlimentoById(@PathVariable Long id) {
        return ResponseEntity.ok(new Alimento("Abacaxi", 1L));
    }

    @PostMapping
    public Alimento postAlimentos(@RequestBody Alimento alimento) {
        return alimento;
    }

}
