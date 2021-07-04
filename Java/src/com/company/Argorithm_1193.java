package com.company;

    import java.util.Scanner;

    public class Argorithm_1193 {
        public static void main(String[] args) {

            Scanner scan = new Scanner(System.in);
            int choiceNum = scan.nextInt();
            int tmp = 0, divisor = 0, dividend = 0;

            // choidNum == 13
            // 다시 연구해보기

            for (int i = 1; ; i++) { // i = 1 > 2 > 3 > 4 > 5
                System.out.println("For > i :: " + i);
                if (choiceNum > tmp && tmp + i >= choiceNum){ // tmp 8, i = 5
                    System.out.println("choiceNum :: " + choiceNum);
                    System.out.println("tmp :: " + tmp);
                    System.out.println("i :: " + i);
                    if (i % 2 == 0) {
                        divisor = i + 1 - (choiceNum - tmp); // 1
                        dividend = choiceNum - tmp; // 2
                    }
                    else {
                        divisor = choiceNum - tmp; // 5
                        dividend = i + 1 - (choiceNum - tmp); // 1
                    }
                    break;
                }
                tmp += i; // 2 > 4 > 6 > 8
                System.out.println("break 밑에 tmp : " + tmp);
            }
            System.out.println(dividend + "/" + divisor);
        }
    }
