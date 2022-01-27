package com.company.buteFoce;

public class TenDivisor {
    public static void main(String[] args) {
        int num = 0;
        for(int i = 1; i < 11; i++){
            if(10 % i == 0) {
                num += i;
            }
        }
        System.out.println("num : " + num);
    }
}
