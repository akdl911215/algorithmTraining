//package com.company.buteFoce;
//
//import com.sun.org.apache.xpath.internal.operations.String;
//
//import java.io.BufferedReader;
//import java.io.IOException;
//import java.io.InputStreamReader;
//import java.util.StringTokenizer;
//
//public class BlackJack {
//    // 카드의 합이 최대 21
//    // 카드의 합을 최대한 크게 만드는게 포인트
//
//    // 딜러는 N장의 카드를 숫자가 보이도록 바닥에 놓는다.
//    // 딜러는 숫자 M을 외친다.
//    // N장의 카드중에서 M의 합을 넘지않고 최대한 가깝게 만든다.
//    // 3장의 카드를 선택한다.
//
//    // 첫째줄 : N M
//    // 둘째줄 : N의 숫자5개 (3 <= N <= 100)
//    //         M(10 <= M <= 300,000)
//    public static void main(String[] args) throws IOException {
//
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
//        int N = Integer.parseInt(st.nextToken());
//        int M = Integer.parseInt(st.nextToken());
//
//        System.out.println("N, M = " + N + ", " + M);
//
//        int[] arr = new int[N];
//
//        st = new StringTokenizer(br.readLine(), " ");
//        for (int i = 0; i < N; i++){
//            arr[i] = Integer.parseInt(st.nextToken());
//            System.out.println(arr[i]);
//        }
//
//        int result = search(arr, N, M);
//        System.out.println("result : " + result);
//    }
//
//    // 탐색
//    static int search(int[] arr, int N, int M) {
//        int result = 0;
//
//        // 3개를 고르기 때문에 첫번째 카드는 N - 2 까지만 순회
//        for (int i = 0; i < N - 2; i++) {
//
//            // 2번째 카드는 첫 번째 카드 다음부터 N - 1 까지만 순회
//            for (int j = i + 1; j < N - 1; j++) {
//
//                // 3번째 카드는 두 번째 카드 다음부터 N 까지 순회
//                for (int k = j + 1; j < N; k++) {
//
//                    // 3개 카드의 합 변수 temp
//                    int temp = arr[i] + arr[j] + arr[k];
//
//                    if (M == temp) {
//                        return temp;
//                    }
//
//                    // 세 카드의 합이 이전 합보다 크면서 M 보다 작을 경우 갱신
//                    if (result < temp && temp < M) {
//                        result = temp;
//                    }
//
//                }
//            }
//        }
//        return result;
//    }
//}
