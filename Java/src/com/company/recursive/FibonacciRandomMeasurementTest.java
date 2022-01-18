package com.company.recursive;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class FibonacciRandomMeasurementTest {
    public static void main(String[] args) throws IOException {

        long beforTime = System.currentTimeMillis();

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int inputNum = Integer.parseInt(br.readLine());

        int firstValue = 0;
        int secondValue = 1;

        int resultNum = fibonacciFunc(inputNum);
        System.out.println("resultNum : " + resultNum);

        long afterTime = System.currentTimeMillis();
        long secDiffTime = (afterTime - beforTime)/1000;
        System.out.println("시간 차이(m) : " + secDiffTime);
    }

    public static int fibonacciFunc(int num){
        if (num > 1) {
            return num + fibonacciFunc(num - 1);
        }

        return num;
    }
}
