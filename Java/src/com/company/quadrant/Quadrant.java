package com.company.quadrant;

import java.util.Random;

public class Quadrant {
    public static void main(String[] args){

        Random random = new Random();

        int randomNumber = random.nextInt(2001) - 1000;
        int randomNumber2 = random.nextInt(2001) - 1000;
        while (true){
            if (randomNumber == 0 || randomNumber2 == 0) continue;
            System.out.println("randomNumber = " + randomNumber);
            System.out.println("randomNumber2 = " + randomNumber2);
            if (randomNumber >= 1 && randomNumber2 >= 1){
                System.out.println("Quadrant 1에 속합니다.");
                break;
            } else if (-1 >= randomNumber && randomNumber2 >= 1) {
                System.out.println("Quadrant 2에 속합니다.");
                break;
            } else if (-1 >= randomNumber && -1 >= randomNumber2) {
                System.out.println("Quadrant 3에 속합니다.");
                break;
            } else {
                System.out.println("Quadrant 4에 속합니다.");
                break;
            }
        }
    }
}
