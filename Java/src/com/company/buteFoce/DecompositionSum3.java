package com.company.buteFoce;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class DecompositionSum3 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int decomSumNum = Integer.parseInt(br.readLine());

        if (decomSumNum < 1 || 1000000 < decomSumNum) {
            System.out.printf("숫자 범위를 확인해보세요.\n범위는 1 <= N <= 1,000,000 입니다.");
            return;
        }
        
        int result = calculation2(decomSumNum);
        System.out.println("result : " + result);
    }

    static int calculation2 (int decomSumNum) {
        int resultNum = 0;
        for (int i = 0; i < decomSumNum; i++) {
            int sumNum = 0;
            int num = i;
            while(num != 0) {
                sumNum += num % 10;
                num /= 10;

            }
            if(sumNum + i == decomSumNum) {
                resultNum = i;
                break;
            }
        }
        return resultNum;
    }
}
