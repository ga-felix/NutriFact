package com.nutrifact.controllers;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

import java.io.StringWriter;

@Controller
public class CalculateBMIController
{
    private double resultBMI;

    @RequestMapping("/CalculateBMI")
    public String showCalcPage() {
        return "calculateBMI/calculatebmi";
    }


    /**
     * Método responsável por gerar um contexto, que por sua vez
     * será enviado como resposta para a página calculateResultBMI
     * @return templateResolver
     */

    public ClassLoaderTemplateResolver templateResolver()
    {
        ClassLoaderTemplateResolver templateResolver = new ClassLoaderTemplateResolver();
        templateResolver.setPrefix("/templates/");
        templateResolver.setSuffix(".html");
        templateResolver.setCharacterEncoding("UTF-8");

        return templateResolver;
    }


    public SpringTemplateEngine templateEngine() {
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.setTemplateResolver(templateResolver());
        return templateEngine;
    }

    @PostMapping("/CalculateBMI")
    public String calculateBMI(@RequestParam String height, @RequestParam String mass, Model model)
    {
        double valueHeight;
        double valueMass;

        try {
            valueHeight = Double.parseDouble(height);
        } catch (NumberFormatException e) {
            valueHeight = 0;
        }

        try {
            valueMass = Double.parseDouble(mass);
        } catch (NumberFormatException e) {
            valueMass = 0;
        }

        resultBMI = valueMass / Math.pow(valueHeight, 2);

        StringWriter writer = new StringWriter();
        Context context = new Context();
        TemplateEngine templateEngine = templateEngine();

        context.setVariable("resultBMI", resultBMI);
        templateEngine.process("calculateResultBMI", context, writer);
//        model.addAttribute("resultBMI", resultBMI);
//       Verificar retorno

        return "calculateResultBMI";
    }
}
