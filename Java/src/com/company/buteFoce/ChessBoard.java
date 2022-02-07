package com.company.buteFoce;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class ChessBoard {
    // 8x8 크기의 체스판을 만든다.
    // MxN 의 크기는 8보다 크고 50보다 작거나 같은 자연수다.

    public static boolean[][] chessBoard;
    public static int min = 64;

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        System.out.println("N : " + N);
        System.out.println("M : " + M);

        chessBoard = new boolean[N][M];
        for (int i = 0; i < N; i++) {
            String str = br.readLine();
            for (int j = 0; j < M; j++) {
                if (str.charAt(j) == 'W') {
                    chessBoard[i][j] = true;    // W일 때는 true
                }
                else {
                    chessBoard[i][j] = false;   // B일 때는 false
                }
            }
        }

//        for (int i = 0; i < N; i++) {
//            for (int j = 0; j < M; j++) {
//                System.out.printf("chessBoard[%d][%d] : %s\n", i, j, chessBoard[i][j]);
//            }
//        }

        int N_row = N - 7;
        int M_col = M - 7;

        for (int i = 0; i < N_row; i++) {
            for (int j = 0; j < M_col; j++) {
                find(i, j);
            }
        }
        System.out.println(min);
    }

    public static void find(int x, int y) {
        int end_x = x + 8;
        int end_y = y + 8;
        int count = 0;

        System.out.println("end_x : " + end_x);
        System.out.println("end_y : " + end_y);
        System.out.println("count : " + count);

        boolean TF = chessBoard[x][y];
        System.out.println("TF : " + TF);

        for (int i = x; i < end_x; i++) {
            for (int j= y; j < end_y; j++) {

                if (chessBoard[i][j] != TF) {
                    count++;
                    System.out.println("count : " + count);
                }

                TF = (!TF);
                System.out.println("if문 밑 TF : " + TF);
            }

            TF = !TF;
            System.out.println("if문 밑밑 TF : " + TF);
        }

        count = Math.min(count, 64 - count);
        System.out.println("count : " + count);

        min = Math.min(min, count);
    }
}
