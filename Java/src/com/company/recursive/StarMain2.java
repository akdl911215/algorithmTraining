package com.company.recursive;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class StarMain2 {
    static char[][] arr;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        arr = new char[N][N];

//        star(0, 0, N, false);

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                sb.append(arr[i][j]);
            }
            sb.append('\n');
        }
        System.out.println(sb);
    }

    static void star(int x, int y, int N, boolean blank) {

        // 공백칸일 경우

    }
}
