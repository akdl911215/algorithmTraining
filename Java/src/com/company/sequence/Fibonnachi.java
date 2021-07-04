package com.company.sequence;

import java.io.IOException;
import java.util.Scanner;

public class Fibonnachi {
    public static void main(String[] args) throws IOException {

        Scanner scan = new Scanner(System.in);
        System.out.printf("입력값은 : ");
        int firstNum = 1;
        int secondNum = 1;
        int addNum = 0;

        int inputNum = scan.nextInt();

        if (inputNum > 2) {
            for (int i=0; i<inputNum-2; i++){
                addNum = firstNum + secondNum;
                firstNum = secondNum;
                secondNum = addNum;
            }
        } else if(inputNum == 1 || inputNum == 2) {
            addNum = 1;
        } else {
            System.out.println("잘못된 입력입니다");
        }
        System.out.printf("%d번째 수열의 값 = %d", inputNum, addNum);
    }
}
