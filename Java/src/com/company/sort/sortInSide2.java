package com.company.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class sortInSide2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String N  = br.readLine();
        int tmp;

        String[] arr = N.split("(?<=.)");
        int[] sortArr = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            sortArr[i] = Integer.parseInt(arr[i]);
        }

        for (int i = 0; i < sortArr.length; i++) {
            for (int j = 0; j < sortArr.length - (i + 1); j++) {
                if (sortArr[j] < sortArr[j + 1]) {
                    tmp = sortArr[j + 1];
                    sortArr[j + 1] = sortArr[j];
                    sortArr[j] = tmp;
                }
            }
        }

        for (int i = 0; i < sortArr.length; i++) {
            System.out.print(sortArr[i]);
        }
    }
}
