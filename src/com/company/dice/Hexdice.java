package com.company.dice;

import java.util.Scanner;

public class Hexdice {
    public static void main(String[] args){

        Scanner scan = new Scanner(System.in);
        int k = scan.nextInt();

        int a = (int)(Math.random() * 6) + 1;
        int b = (int)(Math.random() * 6) + 1;
        System.out.println("a = " + a);
        System.out.println("b = " + b);

        if (k == a + b && 1<= a && a<=4 && 1<=b && b<=4){
            System.out.println("4,1 / 3,2 / 2,3 / 1,4 중 한개입니다.");
            System.out.printf("a(%d)+b(%d) = k(%d)", a, b, k);
        } else {
            System.out.println("4,1 / 3,2 / 2,3 / 1,4 가 아닙니다.");
            System.out.printf("a(%d)+b(%d) = k(%d)", a, b, k);
        }
    }
}
