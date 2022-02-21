package com.company.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class sortInSide4 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] count = new int[10];
        String str = br.readLine();

        for (int i = 0; i < str.length(); i++) {
            System.out.println("str.charAt(i) : " + str.charAt(i));
            count[str.charAt(i) - '0']++;
        }

        for (int i = 9; i >= 0; i--) {
            while (count[i]-- > 0) {
                System.out.print(i);
            }
        }
    }
}
