package com;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class NutriFactController
{
    @GetMapping("/index")
    public String ViewForm(Model model) {
        model.addAttribute("CalculateIMC", new CalculateIMC());
        return "index";
    }

    @PostMapping("/calculate")
    public String calculateIMC(@ModelAttribute CalculateIMC calc, BindingResult result, Model model) {
        model.addAttribute("calc", calc);
        return "calculate";
    }
}
