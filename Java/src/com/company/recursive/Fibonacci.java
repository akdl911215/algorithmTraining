package com.company.recursive;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Fibonacci {

    // 0 = 0 , 1 = 1 , 2 = 0 + 1 .....
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int inputNum = Integer.parseInt(br.readLine());

        int resultNum = fibonacciFunc(inputNum);
        System.out.println("resultNum : " + resultNum);
    }

    public static int fibonacciFunc(int num){
        if (num > 1) {
            return num + fibonacciFunc(num - 1);
        }

        return num;
    }
}
