package com.company.groupWord;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class GroupWord {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    public static void main(String[] args) throws IOException {
        // 첫째 줄에 단어의 개수 N, N <= 100
        // 둘째 줄부터 N개의 줄에 단어가 들어온다.
        // 단어는 알파벳 소문자, 중복 X, 길이는 최대 100

        int count = 0;
        int N = Integer.parseInt(br.readLine());

        for (int i = 0; i < N; i++) {
            if (check() == true) {
                count++;
            }
        }
        System.out.println(count);
    }

    public static boolean check() throws IOException {
        boolean[] check = new boolean[26];
        int prev = 0;
        String str = br.readLine();

        for (int i=0; i<str.length(); i++) {
            int now = str.charAt(i); // i번쨰 문자 저장(현재 문자)

            // 앞선 문자와 i 번째 문자가 같지 않다면?
            if (prev != now) {

                // 해당 문자가 처음 나오는 경우 (false인 경우)
                if (check[now - 'a'] == false) { // boolean의 기본값은 false
                    check[now - 'a'] = true; // true로 바꿔준다
                    prev = now; // 다음 턴을 위해 prev도 바꿔준다.
                }

                // 해당 문자가 이미 나온 적이 있는 경우 (그룹단어가 아니게 됨)
                else {
                    return false; // 함수 종료
                }
            }

            // 앞선 문자와 i 번째 문자가 같다면? (연속된 문자)
            // else 문은 없어도됨됨
            else {
                continue;
           }
        }

        return true;
    }


}
