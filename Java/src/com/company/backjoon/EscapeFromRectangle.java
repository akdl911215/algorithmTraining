package com.company.backjoon;

import java.util.Scanner;

public class EscapeFromRectangle {
    public static void main(String[] args) {
        // 한수는 x,y에 있다.
        // 직사각형은 각 변이 좌표축에 평행하고, 왼쪽 아래 꼭짓점은 (0,0) , 오른쪽 위 꼭짓점은 (w,h)에 있다.
        // 직사각형의 경계선까지 가는 거리의 최솟값을 구하는 프로그램을 작성

        Scanner input = new Scanner(System.in);

        int x = input.nextInt();
        int y = input.nextInt();
        int w = input.nextInt();
        int h = input.nextInt();

        // Math.min()은 주어진 숫자들 중 가장 작은 값을 반환한다.
        int x_min = Math.min(x, w-x);
        int y_min = Math.min(y, h-y);

        System.out.println(Math.min(x_min, y_min));
    }
}
//acmicpc.net/problem/1085