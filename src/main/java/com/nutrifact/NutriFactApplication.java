package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {""})
//@EnableAutoConfiguration(exclude = {ErrorMvcAutoConfiguration.class})
public class NutriFactApplication {

	public static void main(String[] args) {
		SpringApplication.run(NutriFactApplication.class, args);
	}

}
