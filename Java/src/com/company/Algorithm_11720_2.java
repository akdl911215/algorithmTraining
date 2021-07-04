package com.company;

import java.util.Scanner;

public class Algorithm_11720_2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int N = scan.nextInt();
        String number = scan.next();
        scan.close();

        int totalNum = 0;

        for (int i=0; i < N; i++) {
            totalNum += number.charAt(i)-'0';
        }
        System.out.println("totalNum : " + totalNum);
    }
}
