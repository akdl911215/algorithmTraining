package com.company.recursive;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class FibonacciRandomMeasurementTest2 {
    public static void main(String[] args) {

        long beforTime = System.currentTimeMillis();

        int inputNum = (int)(Math.random() * 10);
        System.out.println("inputNum : " + inputNum);

        int firstValue = 0;
        int secondValue = 1;

        int resultNum = fibonacciFunc(inputNum);
        System.out.println("resultNum : " + resultNum);

        long afterTime = System.currentTimeMillis();
        long secDiffTime = (afterTime - beforTime);
        System.out.println("시간 차이(m) : " + secDiffTime);
    }

    public static int fibonacciFunc(int num){
        if (num > 1) {
            return num + fibonacciFunc(num - 1);
        }

        return num;
    }
}
