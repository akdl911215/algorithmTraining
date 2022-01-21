package com.company.recursive;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.Scanner;

public class HanoiTower3 {

    // BufferedWriter : System.out.println(); 과 유사
    // 버퍼를 이용한 출력
   static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    public static void main(String[] args) throws IOException {
        Scanner in = new Scanner(System.in);

        int N = in.nextInt();

        // Math.pow : 거듭제곱
        // 강제 타입 변환(Casting)은 큰 크기 타입을 작은 크기 타입으로 맞추기 위한 변환이다.
        // 강제로 잘린 타입의 데이터는 유실이 된다.
        bw.write((int) (Math.pow(2, N) - 1) + "\n");

        Hanoi(N, 1, 2, 3);
        bw.flush();
        bw.close();
    }

    /*
        N : 원판의 개수
        start : 출발지
        mid : 옮기기 위해 이동할 장소
        to : 목적지
     */

    public static void Hanoi(int N, int start, int mid, int to) throws IOException {
        // 이동할 원반의 수가 1개라면?
        if (N == 1) {
            bw.write(start + " " + to + "\n");
            return;
        }

        // Hanoi(N, 1, 2, 3);

        // STEP 1 : N - 1 개를 A에서 B로 이동
        Hanoi(N - 1, start, to, mid);
        System.out.println("=== 1 ===");

        // STEP 2 : 1개를 A에서 C로 이동
        bw.write(start + " " + to + "\n");
        System.out.println("=== 2 ===");

        // STEP 3 : N - 1 개를 B에서 C로 이동
        Hanoi(N - 1, mid, start, to);
        System.out.println("=== 3 ===");
    }
}
