package com.company.testing;

public class fibonachi {

    // 1 = 0
    // 2 = 1
    // 3 = 1자리 + 2자리

    static int fibonachi(int num) {

        if (num <= 1) return 0;
        if (num == 2) return 1;

        return fibonachi(num - 1) + fibonachi(num - 2);
    }

    public static void main(String[] args) {
        int result = fibonachi(5);
        System.out.println(result);
    }
}
