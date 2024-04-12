package Fibonacci;

import java.util.Arrays;

public class Fibonacci {
    public static int solution(int n) {

        if (n <= 1) {
            return n;
        }

        int[] fibCache = new int[n + 1];
        fibCache[0] = 0;
        fibCache[1] = 1;

        for (int i = 2; i <= n; ++i) {
            int x = fibCache[i - 1];
            int y = fibCache[i - 2];
            fibCache[i] = x + y;
        }
        return fibCache[n];

    }


    public static void main(String[] args) {
        int n = 10;
        System.out.println(solution(n));


    }
}
