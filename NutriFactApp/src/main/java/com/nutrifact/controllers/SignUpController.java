package com.nutrifact.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SignUpController
{
    /**
     * Método responsável por retornar um formulário
     * de cadastro do usuário da aplicação.
     */
    @RequestMapping("/signUp")
    public String getFormSignUp() {
        return "signup/formSignUp";    // Não é necessário especificar a extensão .html
    }
}
