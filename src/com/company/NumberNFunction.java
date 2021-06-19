package com.company;

public class NumberNFunction {
    // 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
    // n개가 주어지는 만큼 배열의 수도 늘어남

    class Test {
        long sum(int[] a) {
            long sum = 0;

            for (int i=0; i < a.length; i++) {
                sum += a[i];
            }

            return sum;
        }
    }

}
