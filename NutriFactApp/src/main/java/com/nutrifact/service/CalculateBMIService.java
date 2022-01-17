package com.nutrifact.service;

import com.nutrifact.model.CalculateImcResponse;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

@Component
public class CalculateBMIService {

    public CalculateImcResponse calculateBMI(double altura, double peso) {

        double imc = peso / Math.pow(altura, 2);

        if(imc <= 18.5) {
            return CalculateImcResponse.builder()
                    .message("De acordo com a OMS, seu IMC está abaixo do recomendado para a sua altura.")
                    .variant("danger")
                    .build();
        } else if(imc > 18.5 && imc <= 24.9) {
            return CalculateImcResponse.builder()
                    .message("De acordo com a OMS, seu IMC é considerado normal para a sua altura.")
                    .variant("success")
                    .build();
        } else if(imc > 24.9 && imc <= 30) {
            return CalculateImcResponse.builder()
                    .message("De acordo com a OMS, seu IMC está acima do recomendado para a sua altura")
                    .variant("warning")
                    .build();
        } else if(imc > 30) {
            return CalculateImcResponse.builder()
                    .message("De acordo com a OMS, seu IMC está acima do recomendado para a sua altura")
                    .variant("danger")
                    .build();
        } else {
            return CalculateImcResponse.builder()
                    .message("Não foi possível calcular seu IMC. Verifique os valores inseridos.")
                    .variant("primary")
                    .build();
        }
    }
}
