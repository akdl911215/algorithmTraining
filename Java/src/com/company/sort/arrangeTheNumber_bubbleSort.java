package com.company.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class arrangeTheNumber_bubbleSort {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] sortArr = new int[N];
        int tmp;

        for (int i = 0; i < N; i++) sortArr[i] = Integer.parseInt(br.readLine());


        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N - (i + 1); j++) {
                if (sortArr[j] > sortArr[j + 1]) {
                    tmp = sortArr[j];
                    sortArr[j] = sortArr[j + 1];
                    sortArr[j + 1] = tmp;
                }
            }
        }

        for (int i = 0; i < N; i++) System.out.println(sortArr[i]);


    }
}
