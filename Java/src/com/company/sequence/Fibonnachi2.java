package com.company.sequence;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Fibonnachi2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("BufferedReader ::: " );
        int inputNum = Integer.parseInt(br.readLine());
        System.out.print("inputNum : " + inputNum);

        int firstNum = 1;
        int secondNum = 1;
        int addNum = 0;

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
        System.out.printf("\n%d번째 수열의 값 = %d", inputNum, addNum);
    }

}
