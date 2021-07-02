package com.company.quadrant;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Quadrant2 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int randomNumber = Integer.parseInt(br.readLine());
        int randomNumber2 = Integer.parseInt(br.readLine());
            System.out.println("randomNumber = " + randomNumber);
            System.out.println("randomNumber2 = " + randomNumber2);
        if (randomNumber >= 1 && randomNumber2 >= 1){
            System.out.println("Quadrant 1에 속합니다.");

        } else if (-1 >= randomNumber && randomNumber2 >= 1) {
            System.out.println("Quadrant 2에 속합니다.");

        } else if (-1 >= randomNumber && -1 >= randomNumber2) {
            System.out.println("Quadrant 3에 속합니다.");
        } else {
            System.out.println("Quadrant 4에 속합니다.");
        }
    }
}