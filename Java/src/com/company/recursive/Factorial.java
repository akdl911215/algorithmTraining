package com.company.recursive;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Factorial {
    // 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
    // 팩토리얼은 1부터 n까지 숫자를 차례대로 곱한 값이며 ! (느낌표) 기호로 표기
    // N(0 ≤ N ≤ 12)
    // fact n * ( n - 1 )
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int inputNum = Integer.parseInt(br.readLine());

        int totalNum = fact(inputNum);
        System.out.println("totalNum : " + totalNum);

    }

    public static int fact(int num) {

        // fcatorial 함수의 핵심은 반환값 부분이다. 계산 결과가 즉시 구해지는 것이
        // 아니라 재귀호출로 n - 1을 계속 전달하다가 n이 1일 때 비로소 1을 반환하면서
        // n과 곱하고 다시 결괏값을 반환한다. 그 뒤 n과 반환된 결과값을 곱하여 다시
        // 반환 하는 과정을 반복한다.
        if (num > 1) {
            num = num * fact(num - 1);
            return num;
        }

        return 1;
    }
}
