package com.company.selfNumber;

public class selfNumber {

    public static final int MAX = 10001;

    public static int getNum(int x) {
        int sum = x;
        while(x >= 10) {
            sum += x%10;
            x /= 10;
        }
        sum += x;
        return sum;
    }

    public static void main(String[] args) {
        // 33 > 다음 수는 33 + 3 + 3 = 39
        // 39 > 39 + 3 + 9 = 51
        // 반복은 10000번 실행

        boolean[] isSelfNum = new boolean[MAX];
        for (int i=1; i<MAX; i++) {
            for (int j=getNum(i); j<MAX; j=getNum(j)) {
                if (isSelfNum[j]) continue;;
                isSelfNum[j] = true;
            }
        }
        for (int i=1; i<MAX; i++) {
            if (!isSelfNum[i])
                System.out.println(i);
        }
    }
}
