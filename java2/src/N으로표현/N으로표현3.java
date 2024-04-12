package N으로표현;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class N으로표현3 {

    private static int repeat(int N, int count) {
        StringBuilder sb = new StringBuilder();

        sb.append(N);
        for (int i = 1; i < count; ++i) {
            sb.append(N);
        }

        return Integer.parseInt(sb.toString());
    }

    public static int solution(int N, int number) {

        if (N == number) return 1;

        List<Set<Integer>> dp = new ArrayList<>();
        for (int i = 0; i < 9; ++i) {
            dp.add(new HashSet<>());
        }

        for (int i = 1; i < 9; ++i) {
            int baseValue = repeat(N, i);
            dp.get(i).add(baseValue);

            for (int j = 1; j < i; ++j) {
                List<Integer> list1 = new ArrayList<>(dp.get(j));
                List<Integer> list2 = new ArrayList<>(dp.get(i - j));

                for (int k = 0; k <list1.size(); ++k) {
                       int list1K = list1.get(k);
                       for (int l = 0; l < list2.size(); ++l) {
                           int list2L = list2.get(l);

                           dp.get(i).add(list1K + list2L);
                           dp.get(i).add(list1K - list2L);
                           dp.get(i).add(list1K * list2L);
                           if (list2L != 0) dp.get(i).add(list1K / list2L);
                       }
                }
            }

            if (dp.get(i).contains(number)) return i;
        }

        return -1;
    }

    public static void main(String[] args) {
        int N = 5;
        int number = 12;
        System.out.println(solution(N, number));
        // 4

//        int N2 = 2;
//        int number2 = 11;
//        System.out.println(solution(N2, number2));
        // 3
    }
}
