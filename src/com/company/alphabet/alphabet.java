package com.company.alphabet;

import java.util.Scanner;

public class alphabet {
    public static void main(String[] args) {
        // 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이
        // 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

        Scanner input = new Scanner(System.in);

        int[] arr = new int[26];
        String s = input.next();
        // bba를 입력을 입력할 경우
        System.out.println("s = " + s);
        System.out.println("");

        for (int i = 0; i < s.length(); i++) {
            System.out.println("i = " + i);
            System.out.println("s.charAt(i) = " + s.charAt(i));
            if ('A' <= s.charAt(i) && s.charAt(i) <= 'Z') {
                arr[s.charAt(i) - 'A']++;
                System.out.printf("arr[%d] = %s\n\n", i, s.charAt(i) - 'a');
            }
            else {
                arr[s.charAt(i) - 'a']++;
                System.out.printf("arr[%d] = %s\n\n", i, s.charAt(i) - 'a');
            }
//
        }

        // 예상 출력은
        // arr[0] = 1 , arr[1] = 1 , arr[2] = 0 이 될것이라고 생각함.


        int max = -1;
        char ch = '?';

        for (int i = 0; i < s.length(); i++) {
            System.out.println("밑에 i = " + i);
            System.out.println("max = " + max);
            System.out.printf("arr[%d] = %s\n" ,i , arr[i]);
            if (arr[i] > max) {

                max = arr[i];
                System.out.println("if안쪽 max = " + max);

                ch = (char)(i+65);
                System.out.println("ch = " + ch);
            }
            else if (arr[i] == max){
                ch = '?';
            }
        }

        System.out.print("ch : " + ch);
    }
}
