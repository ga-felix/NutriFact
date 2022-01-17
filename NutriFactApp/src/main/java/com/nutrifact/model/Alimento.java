package com.nutrifact.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Alimento {

    public Alimento(String name, Long id) {
        this.name = name;
        this.id = id;
    }

    private Long id;
    private String name;
    private String humidity;
    private String protein;
    private String lipid;
    private String cholesterol;
    private String carbohydrate;
    private String fiber;
    private String ashes;
    private String calcium;
    private String magnesium;
    private String prosphorus;
    private String iron;
    private String sodium;
    private String potassium;
    private String copper;
    private String zinc;
    private String retinol;
    private String thiamine;
    private String riboflavin;
    private String pyridoxine;
    private String energy;


}
