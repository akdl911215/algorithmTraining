package com.company.buteFoce;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;

public class DecompositionSum {
    // ex) 256(=245+2+4+5)
    //     216(=198+1+9+8)
    // M의 분해합 = 256(=245+2+4+5) > 245는 256의 생성자가 된다

    // M = N + N1자리수 + N2자리수 + N3자리수
    // M = N의 생성자
    // 생성자가 없을 수도, 생성자가 여러개 일 수도
    // 생성자가 많을 경우 작은 생성자를 구한다.
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int decomSumNum = Integer.parseInt(br.readLine());
        int result = calculation(decomSumNum);
        System.out.println("result : " + result);
    }

    static int calculation (int decomSumNum) {

        LinkedList<Integer> stack = new LinkedList<>();

        int diviedNum = decomSumNum;
        while (diviedNum > 0) {
            stack.push(decomSumNum % 10);
            diviedNum /= 10;
        }

        int subNum = decomSumNum;
        while(!stack.isEmpty()) {
            subNum -= stack.pop();
        }
        return subNum;
    }
}
