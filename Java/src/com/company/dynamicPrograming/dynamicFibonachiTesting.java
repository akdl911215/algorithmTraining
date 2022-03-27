package com.company.dynamicPrograming;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class dynamicFibonachiTesting {

    private static final int MAX_COUNT = 10;
    private static List<Integer> numbers = new ArrayList<Integer>();

    public static void main(String[] args) {
        // Get
        for (int i = 0; i < MAX_COUNT; ++i)
            numbers.add(fibo(i));

        // Print
        Iterator<Integer> iter = numbers.iterator();
        while(iter.hasNext()) {
            Integer n = (Integer) iter.next();
            System.out.println(n);
        }
    }

    private static int fibo(int number) {
        if (number == 0 || number == 1)
            return  number;

        return fibo(number - 2) + fibo(number - 1);
    }
}
