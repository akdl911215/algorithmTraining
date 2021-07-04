package com.company.selfNumber;

import java.util.ArrayList;

public class SieveOfEratosthenes {

    public static final int MAX = 25;

    public static void main(String[] args) {
        ArrayList<Integer> primeList = new ArrayList<Integer>();
        System.out.println("primeList :: " + primeList);
        boolean isPrime[] = new boolean[MAX+1];
        for (int i = 2; i <= MAX; i++) {
            isPrime[i] = true;
//            System.out.println("isPrime[i] = " + isPrime[i]);
            System.out.printf("isPrime[%d] = %s\n", i, isPrime[i]);
        }
        for (int i = 2; i <= MAX; i++) {
            if (!isPrime[i]) continue;
            else primeList.add(i); System.out.println("primeList ::: " + primeList);
            for (int j = i * 2; j <= MAX; j += i) {
                isPrime[j] = false;
                System.out.printf("for문 안쪽 isPrime[%d] = %s\n" , j, isPrime[j]);
            }
        }
        for (int i=0; i < primeList.size(); i++) {
            System.out.println(primeList.get(i));
        }
    }
}
