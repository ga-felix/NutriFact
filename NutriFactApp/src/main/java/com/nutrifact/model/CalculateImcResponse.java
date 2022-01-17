package com.nutrifact.model;

import lombok.Builder;
import lombok.Data;

@Data @Builder
public class CalculateImcResponse {

    private String message;
    private String variant;
}
