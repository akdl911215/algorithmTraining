package com.company.programers;

public class money {
    public static void main(String[] args) {
        solution(100, 200, 1000);
    }
    public static int solution(int a, int b, int budget){

        // 3000 , 5000, 23000
        int answer = 0;


        for (int i = 0; i*a < budget; i++) {
            for (int j = 0; j*b < budget; j++) {
                if((budget-(i*a+j*b))==0)
                    answer++;
            }
        }

        System.out.println(answer);
        return answer;
    }
}
