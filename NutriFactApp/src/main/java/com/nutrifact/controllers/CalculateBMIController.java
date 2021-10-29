package com.nutrifact.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CalculateBMIController
{
    @RequestMapping("/CalculateBMI")
    public String showCalcPage() {
        return "calculateBMI/calculatebmi";
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

        double result = valueMass / Math.pow(valueHeight, 2);

        return "base-layout";
    }
}
