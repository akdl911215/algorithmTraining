package com.company.buteFoce;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Bulky {
    // 몸무게 끼리 비교 , 키 끼리 비교
    // 둘다 클경우 : 덩치가 크다.
    // 하나라도 작을 경우 : 공동
    // 둘다 작을 경우 : 덩치가 작다.
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int TotalPeople = Integer.parseInt(br.readLine());
        if (TotalPeople < 2 || 50 < TotalPeople) {
            System.out.println("인원수 제한은 2 ≤ N ≤ 50 입니다.");
            return;
        }

        int[][] weightAndHeaightArr = new int[TotalPeople][2];

        for (int i = 0; i < TotalPeople; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");

            weightAndHeaightArr[i][0] = Integer.parseInt(st.nextToken());
            if (weightAndHeaightArr[i][0] < 10 || 200 < weightAndHeaightArr[i][0]){
                System.out.println("몸무게와 키의 제한은 10 ≤ x, y ≤ 200 입니다.");
                return;
            }

            weightAndHeaightArr[i][1] = Integer.parseInt(st.nextToken());
            if (weightAndHeaightArr[i][1] < 10 || 200 < weightAndHeaightArr[i][1]) {
                System.out.println("몸무게와 키의 제한은 10 ≤ x, y ≤ 200 입니다.");
                return;
            }
        }

        for (int i = 0; i < TotalPeople; i++) {
            int rank = 1;
            for (int j = 0; j < TotalPeople; j++){
                if (i == j) continue;
                if (weightAndHeaightArr[i][0] < weightAndHeaightArr[j][0] &&
                weightAndHeaightArr[i][1] < weightAndHeaightArr[j][1]) {
                    rank++;
                }
            }

            System.out.print(rank + " ");
        }
    }
}
