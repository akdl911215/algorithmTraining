package com.company.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;

public class sortInSide {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String N  = br.readLine();

        String[] arr = N.split("(?<=.)");
        Arrays.sort(arr, Collections.reverseOrder());

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
        }
    }
}
