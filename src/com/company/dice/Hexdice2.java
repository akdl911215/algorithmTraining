package com.company.dice;

import java.util.Scanner;

public class Hexdice2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int k = scan.nextInt();

        for (int i = 1; i < 7; i++) {
            for (int j = 1; j < 7; j++) {
                if (i + j == k){
                    System.out.printf("%d + %d = %d\n", i, j, k);
                }
            }
        }
    }
}
