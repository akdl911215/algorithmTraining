package com.company.groupWord;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class GroupWord2 {
    // 첫째 줄에 단어의 개수 N, N <= 100
    // 둘째 줄부터 N개의 줄에 단어가 들어온다.
    // 단어는 알파벳 소문자, 중복 X, 길이는 최대 100

    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    public static void main(String[] args) throws IOException {
        int count = 0;
        System.out.print("N 값을 입력하시오 : ");
        int N = Integer.parseInt(br.readLine());
        if (1 <= N && N <= 100) {
            for (int i=0; i<N; i++) {
                if (check() == true){
                    count++;
                }
            }
            System.out.println("count 값 = " + count);
        }
    }

    public static boolean check() throws IOException {

        boolean[] check = new boolean[26];
        int duplicateCheck = 0;
        System.out.print("str 값 = ");
        String str = br.readLine();

        for (int i=0; i<str.length(); i++) {
            int nowWord = str.charAt(i);

            if (duplicateCheck != nowWord) {
                if (check[nowWord - 'a'] == false) {
                    check[nowWord - 'a'] = true;
                    duplicateCheck = nowWord;
                }

                else {
                    return false;
                }
            }

            else {
                continue;
            }
        }
        return true;
    }
}
