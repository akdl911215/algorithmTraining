package com.company.sequence;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Fibonnachi3 {

    public static int fibo(int inputNum){
        if (0 <= inputNum && inputNum <= 1)
            return inputNum;
        else
            return fibo(inputNum-2) + fibo(inputNum-1);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("BufferedReader ::: ");
        int inputNum = Integer.parseInt(br.readLine());
        System.out.print("inputNum : " + inputNum);
    }
}
