package com.company.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class arrangeTheNumber_countingSort {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int NUMBER_RANGE = Integer.parseInt(br.readLine());
        int N = Integer.parseInt(br.readLine());

        int[] count = new int[NUMBER_RANGE];
        int[] arr = new int[N];

        // 7개의 배열을 모두 0으로 초기화
        for (int i = 0; i < NUMBER_RANGE; i++) {
            count[i] = 0;
        }

        // N의 크기만큼 숫자 입력
        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }

        // count[0] ~ count[7] 값을 카운팅
        for (int i = 0; i < N; i++) {
            count[arr[i] - 1]++;
        }

        for (int i = 0; i < NUMBER_RANGE; i++) {
            if (count[i] != 0) {
                for (int j = 0; j < count[i]; j++) {
                    System.out.print((i + 1) + " ");
                }
            }
        }
    }
}