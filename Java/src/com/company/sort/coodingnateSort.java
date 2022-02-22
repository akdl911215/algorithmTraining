package com.company.sort;

import java.util.Scanner;

public class coodingnateSort {

    // 첫째 줄에 점의 개수 입력
    // 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다
    // 항상 정수이며 위차가 같은 두 점은 없다.

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int N = scan.nextInt();
        int[][] arr = new int[N][2];
        int tmp, tmp2;

        for (int i = 0; i < N; i++){
            for (int j = 0; j < 2; j++) {
                arr[i][j] = scan.nextInt();
            }
        }

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N - (i + 1); j++) {
                    if (arr[j][0] > arr[j + 1][0]) {
                        tmp = arr[j][0];
                        arr[j][0] = arr[j + 1][0];
                        arr[j + 1][0] = tmp;

                        tmp2 = arr[j][1];
                        arr[j][1] = arr[j + 1][1];
                        arr[j + 1][1] = tmp2;
                    }
                    if (arr[j][0] == arr[j + 1][0]) {
                        if (arr[j][1] > arr[j + 1][1]) {
                            tmp = arr[j][0];
                            arr[j][0] = arr[j + 1][0];
                            arr[j + 1][0] = tmp;

                            tmp2 = arr[j][1];
                            arr[j][1] = arr[j + 1][1];
                            arr[j + 1][1] = tmp2;
                        }
                    }
            }
        }

        for (int i = 0; i < N; i++) {
            System.out.println(arr[i][0] + " " + arr[i][1]);
        }
    }
}
