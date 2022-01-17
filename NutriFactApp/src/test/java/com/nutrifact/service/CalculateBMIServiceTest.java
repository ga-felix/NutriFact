package com.nutrifact.service;

import com.nutrifact.model.CalculateImcResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
class CalculateBMIServiceTest {
    private CalculateBMIService calculateBMIService;

    @BeforeEach
    void setUp() {
        calculateBMIService = new CalculateBMIService();
    }

    @Test
    void abaixoDoPeso() {

        String abaixo = "De acordo com a OMS, seu IMC está abaixo do recomendado para a sua altura.";
        CalculateImcResponse calculateImcResponse = calculateBMIService.calculateBMI(1.60, 45);

        assertThat(calculateImcResponse.getMessage()).isEqualTo(abaixo);
        assertThat(calculateImcResponse.getVariant()).isEqualTo("danger");

    }

    @Test
    void normal() {

        String abaixo = "De acordo com a OMS, seu IMC é considerado normal para a sua altura.";
        CalculateImcResponse calculateImcResponse = calculateBMIService.calculateBMI(1.60, 50);

        assertThat(calculateImcResponse.getMessage()).isEqualTo(abaixo);
        assertThat(calculateImcResponse.getVariant()).isEqualTo("success");

    }

    @Test
    void acima() {

        String acima = "De acordo com a OMS, seu IMC está acima do recomendado para a sua altura";
        CalculateImcResponse calculateImcResponse = calculateBMIService.calculateBMI(1.60, 65);

        assertThat(calculateImcResponse.getMessage()).isEqualTo(acima);
        assertThat(calculateImcResponse.getVariant()).isEqualTo("warning");

    }

    @Test
    @Disabled
    void naoInformado() {

        String abaixo = "Não foi possível calcular seu IMC. Verifique os valores inseridos.";
        CalculateImcResponse calculateImcResponse = calculateBMIService.calculateBMI(1.60, 45);

        assertThat(calculateImcResponse.getMessage()).isEqualTo(abaixo);
        assertThat(calculateImcResponse.getVariant()).isEqualTo("danger");

    }

}