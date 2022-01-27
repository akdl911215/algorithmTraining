package com.company.buteFoce;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BlackJack2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        if (N < 3 || 100 < N) {
            System.out.println("N의 범위를 확인해보세요.");
            System.out.println("N의 범위 : 3 <= N <= 100");
            return;
        }
        if (M < 10 || 300000 < M) {
            System.out.println("M의 범위를 확인해보세요.");
            System.out.println("N의 범위 : 10 <= M <= 300000");
            return;
        }

        System.out.println("N, M = " + N + ", " + M);

        int[] arr = new int[N];

        st = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < N; i++){
            arr[i] = Integer.parseInt(st.nextToken());
        }

        int result = search(arr, N, M);
        System.out.printf("M값 = %d , 3개의 합 = %d", M, result);
    }

    static int search(int[] arr, int N, int M) {
        int result = 0;

        // 3개를 고르기 때문에 첫번째 카드는 N - 2 까지만 순회
        for (int i = 0; i < N - 2; i++) {
            // 2번째 카드는 첫 번째 카드 다음부터 N - 1 까지만 순회
            for (int j = i + 1; j < N - 1; j++) {
                // 3번째 카드는 두 번째 카드 다음부터 N 까지 순회
                for (int k = j + 1; k < N; k++) {
                    // 3개 카드의 합 변수 temp
                    int threeSumNum = arr[i] + arr[j] + arr[k];
                    if (M == threeSumNum) {
                        return threeSumNum;
                    }
                    // 세 카드의 합이 이전 합보다 크면서 M 보다 작을 경우 갱신
                    if (result < threeSumNum && threeSumNum < M) {
                        result = threeSumNum;
                    }

                }
            }
        }
        return result;
    }
}
