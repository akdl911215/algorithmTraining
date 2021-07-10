package com.company.backjoon;

import java.util.Random;

public class ReandomTest {
    public static void main(String[] args) {

        for (int i = 0; i < 50; i++) {
            int a = (int)(Math.random() * 51);
            System.out.println("1번째 랜덤 수 = " + a);
        }

        for (int i = 0; i < 50; i++) {
            Random random = new Random();
            System.out.println("2번째 랜덤 수 = " + random.nextInt(51));
        }



    }
}
