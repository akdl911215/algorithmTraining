package com.company.selfNumber;

public class selfNumber2 {
    public static int d(int number) {
        System.out.println("number " + number);
        int sum = number;

        while (number != 0) {
            sum = sum + (number % 10);
            number = number/10;
        }

        return sum;
    }

    public static void main(String[] args) {

        boolean[] check = new boolean[10001];

        for (int i=1; i < 10001; i++) {
            int n = d(i);
            System.out.printf("d(%d) = %d\n", i, d(i));
            System.out.println("n ::: " + n);

            if(n < 10001){
                check[n] = true;
                System.out.printf("check[%s] :: %s\n", n, check[n]);
            }
        }

        StringBuilder sb = new StringBuilder();
        System.out.println("sb ::: \n" + sb);

        for (int i=1; i<10001; i++) {
            if (!check[i]) {
                sb.append(i).append('\n');
            }
        }
        System.out.println(sb);
    }
}
