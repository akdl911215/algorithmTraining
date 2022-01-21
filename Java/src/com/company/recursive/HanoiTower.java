package com.company.recursive;

import java.util.Scanner;

public class HanoiTower {
    public static int answer = 0;
    public static StringBuilder sb = new StringBuilder();

    // from에 꽂혀있는 num개의 원반을 by를 거쳐 to로 이동한다.
    public static void moveHanoiTower(int num, int from, int by, int to) {
        // num = 지정한 숫자
        // from = ~에서 부터
        // by = ~ 옆에
        // to = ~ 쪽으로

        ++answer;

        // 이동할 원반의 수가 1개라면?
        if (num == 1) sb.append(from + " " + to + "\n");
        else {
            // STEP 1 : num - 1 개를 A에서 B로 이동
            moveHanoiTower(num - 1, from, to, by);

            // STEP 2 : 1개를 A에서 C로 이동
            sb.append(from + " " + to + "\n");

            // SETP 3 : num - 1개를 B에서 C로 이동
            moveHanoiTower(num - 1, by, from, to);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        moveHanoiTower(num, 1, 2, 3);

        // .insert() : 문자열을 인수에 전달한 후, 문자열의 지정된 인덱스에 추가한다.
        //             전달된 인덱스가 문자열의 길이와 같으면, append() 메소드와 같은 결과를 나타낸다.
        //             insert() 메소드를 사용하기 위해서는 StringBuffer 클래스를 임포트해야 한다.
        sb.insert(0, answer + "\n");
        System.out.println(sb);
    }
}
