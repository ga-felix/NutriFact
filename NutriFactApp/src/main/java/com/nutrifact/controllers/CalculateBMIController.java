package com.nutrifact.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CalculateBMIController
{
    @RequestMapping("/calculatebmi")
    public String showCalcPage() {
        return "calculateBMI/calculatebmi";
    }
}
