package com.company.testing;

public class factorialTest {

    static int num = 5;


    static int factorial(int num) {

        if (num == 1)
            return 1;

        return num *= factorial(num - 1);
    }

    public static void main(String[] args) {
        int fac = factorial(num);

        System.out.println(fac);
    }
}
