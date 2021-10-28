package com.nutrifact;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class NutriFactController
{
    @RequestMapping("/")
    public String index() {
        return "mainpage";
    }
}
