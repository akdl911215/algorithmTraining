package com.company.backjoon;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class EscapeFromRectangle2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        System.out.println("st : " + st);
        // StringTokenizer 클래스는 문자열을 우리가 지정한 구분자로 문자열을 쪼개주는 클래스이다.
        // 쪼개진 문자열을 토큰(Token)이라고 부른다.

        // Intefer.parseInt(String s) : 숫자형의 문자열을 인자 값으로 받으면 해당 값을 10진수의 Integer 형으로 반환
        // Intefer.parseInt(String s, int radix) : 숫자형의 문자열을 첫번째 인자 값으로 받고 변환할
        // 진수값을 입력하면 해당 진수에 맞춰 Intefer형으로 반환
//        System.out.println("st.nextToken() : " + st.nextToken());
        int x = Integer.parseInt(st.nextToken());
        int y = Integer.parseInt(st.nextToken());
        int w = Integer.parseInt(st.nextToken());
        int h = Integer.parseInt(st.nextToken());

        int x_min = Math.min(x, w-x);
        int y_min = Math.min(y, h-y);

        System.out.println(Math.min(x_min, y_min));
    }
}
