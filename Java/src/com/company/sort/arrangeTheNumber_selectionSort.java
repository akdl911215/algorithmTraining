package com.company.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class arrangeTheNumber_selectionSort {

    public static int min, tmp, index;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] sortArr = new int[N];

        for (int i = 0; i < N; i++) sortArr[i] = Integer.parseInt(br.readLine());


        for (int i = 0; i < N; i++) {
            min = 9999;
            for (int j = i; j < N; j++) {
                if (min > sortArr[j]) {
                    min = sortArr[j];
                    index = j;
                }
            tmp = sortArr[i];
            sortArr[i] = sortArr[index];
            sortArr[index] = tmp;
            }
        }
        for (int i = 0; i < N; i++) System.out.println(sortArr[i]);
    }
}
