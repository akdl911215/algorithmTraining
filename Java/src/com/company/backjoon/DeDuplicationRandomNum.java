package com.company.backjoon;

import java.util.Random;

public class DeDuplicationRandomNum {
    public static void main(String[] args) {
        int a[] = new int[10];
        Random random = new Random();

        for (int i=0; i<10; i++) {
            a[i] = random.nextInt(10) + 1;
            for (int j=0; j<i; j++) {
                if (a[i] == a[j]) {
                    i--;
                }
            }
        }
        for (int k=0; k<10; k++){
            System.out.printf("a[%d] 값 = %d\n", k, a[k]);
        }
    }
}
