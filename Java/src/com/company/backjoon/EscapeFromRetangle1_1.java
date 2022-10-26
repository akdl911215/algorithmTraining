package com.company.backjoon;

import java.util.Scanner;

public class EscapeFromRetangle1_1 {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        int x = input.nextInt();
        int y = input.nextInt();
        int w = input.nextInt();
        int h = input.nextInt();

        // Math.min() : 입력받은 두개의 인자 값 중 작은 값 리턴
        int x_min = Math.min(x, w-x);
        int y_min = Math.min(y, h-y);

        System.out.println(Math.min(x_min, y_min));
    }

}
