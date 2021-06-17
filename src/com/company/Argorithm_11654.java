package com.company;

import java.util.Scanner;

public class Argorithm_11654 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // charAt() : String으로 저장된 문자열 중에서 0번째 index의 글자만 추출해서 char타입으로 변환
        // next() : String,다음 토큰을 문자열로 return
        int askiCode = scan.next().charAt(0);
        System.out.println(askiCode);
    }
}
