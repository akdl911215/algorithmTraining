package com.company.sort;

public class arrangeTheNumber_countingSort2 {
    public static void main(String[] args) {
        int[] count = new int[5];
//        int[] arr = new int[30];
        int[] arr = {
            1, 3, 2, 4, 3, 2, 5, 3, 1, 2,
            3, 4, 4, 3, 5, 1, 2, 3, 5, 2,
            3, 1, 4, 3, 5, 1, 2, 1, 1, 1
        };

        // 5개의 배열을 모두 0으로 초기화
        for (int i = 0; i < 5; i++) {
            count[i] = 0;
        }

        // count[0] ~ count[4] 값을 카운팅
        for (int i = 0; i < 30; i++) {
            count[arr[i] - 1]++;
        }

//        for (int i = 0; i < 5; i++) {
//            System.out.print(count[i] + " ");
//        }

        for (int i = 0; i < 5; i++) {
            if (count[i] != 0) {
                for (int j = 0; j < count[i]; j++) {
                    System.out.print((i + 1) + " ");
                }
            }
        }

    }
}
