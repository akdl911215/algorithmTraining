package com.company.backTracking;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.Buffer;
import java.util.StringTokenizer;

public class NandMver1 {

    public static int[] arr;
    public static boolean[] visit;
    public static StringBuilder sb = new StringBuilder();

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        arr = new int[M];
        visit = new boolean[N];
        dfs(N, M, 0);
        System.out.println(sb);
    }

    public static void dfs(int N, int M, int depth) {
        System.out.println("N : " + N);
        System.out.println("M : " + M);
        System.out.println("depth : " + depth);

        if (depth == M) {
            for (int val : arr) {
                sb.append(val).append(' ');
            }
            sb.append('\n');
            return;
        }

        for (int i = 0; i < N; ++i) {
            System.out.println("for i : " + i);
            if (!visit[i]) {
                System.out.println("if > !visit[i] : " + !visit[i]);
                visit[i] = true;
                System.out.println("if > visit[i] : " + visit[i]);
                arr[depth] = i + 1;
                System.out.println("if > arr[depth] : " + arr[depth]);

                dfs(N, M, depth + 1);
                visit[i] = false;
            }
        }

        for (int i = 0; i < N; ++i) {
            System.out.print(visit[i] + " ");
        }
        System.out.println(" ");
    }
}
