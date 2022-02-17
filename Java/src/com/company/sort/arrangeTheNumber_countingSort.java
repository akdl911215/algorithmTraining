package com.company.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class arrangeTheNumber_countingSort {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("NUMBER_RANGE : " );
        int NUMBER_RANGE = Integer.parseInt(br.readLine());
        System.out.println("NUMBER_RANGE : "  + NUMBER_RANGE);

        System.out.print("N : ");
        int N = Integer.parseInt(br.readLine());
        System.out.println("N : " + N);
        System.out.println("");


        int[] count = new int[NUMBER_RANGE];
//        for (int i = 0 ; i < NUMBER_RANGE; i++) {
//            System.out.println("count : " + count);
//        }
        int[] arr = new int[N];
//        for (int i = 0 ; i < N; i++) {
//            System.out.println("arr : " + arr);
//        }



        // 5개의 배열을 모두 0으로 초기화
        for (int i = 0; i < NUMBER_RANGE; i++) {
            count[i] = 0;
        }
        for (int i = 0 ; i < NUMBER_RANGE; i++) {
            System.out.printf("count[%d] : %d\n", i, count[i]);
        }

        // count[0] ~ count[4] 값을 카운팅
        for (int i = 0; i < NUMBER_RANGE; i++) {
            count[arr[i] - 1]++;
        }

        for (int i = 0; i < N; i++) {
            System.out.print(count[i] + " ");
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
