package com.company;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Algorithm_11720_3 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("BufferedReader : \n");
        // BufferedReader의 readLine() 을 사용하면 데이터를 라인 단위로 읽을 수 있음
        // readLine 함수의 리턴 값은 String으로 고정
        br.readLine();
        System.out.print("br.readLine : ");

        int sum = 0;

        for (byte value : br.readLine().getBytes()) {
            sum += (value - '0');
        }

        System.out.print(sum);
    }
}
