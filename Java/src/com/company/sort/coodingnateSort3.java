package com.company.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class coodingnateSort3 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        int[][] arr = new int[N][2];
        int tmp, tmp2;
        for (int i = 0; i < N; i++){
                StringTokenizer st = new StringTokenizer(br.readLine());
                arr[i][0] = Integer.parseInt(st.nextToken());
                arr[i][1] = Integer.parseInt(st.nextToken());
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
