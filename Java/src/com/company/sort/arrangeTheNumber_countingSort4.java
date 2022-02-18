package com.company.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class arrangeTheNumber_countingSort4 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        int[] count = new int[7];
        int[] arr = new int[N];

        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }

        for (int i = 0; i < 7; i++) {
            count[i] = 0;
        }

        for (int i = 0; i < N; i++) {
            count[arr[i] - 1]++;
        }

        for (int i = 0; i < 7; i++) {
            if (count[i] != 0) {
                for (int j = 0; j < count[i]; j++){
                    System.out.println(i + 1);
                }
            }
        }
    }
}
