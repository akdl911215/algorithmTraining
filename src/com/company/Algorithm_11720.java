package com.company;

import java.util.Scanner;

public class Algorithm_11720 {
    public static void main(String[] args) {
        // N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
        // 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

        int totalNum = 0;

        Scanner scan = new Scanner(System.in);
        Long in = scan.nextLong();
        scan.close();

        if (in > 0 && in <= 100) {
            Scanner scan2 = new Scanner(System.in);
            Long inputNum = scan2.nextLong();
            scan2.close();

            while(inputNum != 0) {
                for (int i=0; i < in; i++) {
                    totalNum += inputNum % 10;
                    inputNum /= 10;
                }
            }
        }
        System.out.println("마지막 totalNum : " + totalNum);
    }
}
