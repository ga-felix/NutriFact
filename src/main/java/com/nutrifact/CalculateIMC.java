package com;

public class CalculateIMC
{
    private double altura;
    private double massa;

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public double getMassa() {
        return massa;
    }

    public void setMassa(double massa) {
        this.massa = massa;
    }

    public double getIMC() {
        return (this.massa / Math.pow(this.altura, 2));
    }
}
