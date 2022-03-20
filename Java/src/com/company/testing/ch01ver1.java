package com.company.testing;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ch01ver1 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();

        int M, N;

        String[] numberArr = input.split("\\s");
        M = Integer.parseInt(numberArr[0]);
        N = Integer.parseInt(numberArr[1]);

        int result = M * N;
        System.out.println(result);
    }
}
