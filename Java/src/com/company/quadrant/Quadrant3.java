package com.company.quadrant;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Quadrant3 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int x = Integer.parseInt(br.readLine());
        int y = Integer.parseInt(br.readLine());

        if (x > 0) {
            if (y > 0) {
                System.out.println("Quadrant 1에 속합니다.");
            } else {
                System.out.println("Quadrant 4에 속합니다.");
            }
        } else {
            if (y > 0) {
                System.out.println("Quadrant 2에 속합니다.");
            } else {
                System.out.println("Quadrant 3에 속합니다.");
            }
        }
    }
}
