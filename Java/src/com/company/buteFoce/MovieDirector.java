package com.company.buteFoce;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class MovieDirector {

    public static int count;

    // 1 <= N <= 10000
    // N 이랑 X(666이 들어간 총 들어간 숫자 갯수) 같으면 종료
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        for (int i = 666; ; i++) {
            String sixSixSixValue = Integer.toString(i);
            boolean sixSixSixBool = sixSixSixValue.contains("666");

            if (sixSixSixBool) {
                count++;
                if (count == N) {
                    System.out.println(sixSixSixValue);
                    return;
                }
            }
        }
    }
}
