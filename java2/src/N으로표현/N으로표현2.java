package N으로표현;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class N으로표현2 {
    private static int repeatN(int N, int count) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < count; i++) {
            sb.append(N);
        }
        return Integer.parseInt(sb.toString());
    }
    public static int solution(int N, int number) {
        if (N == number) return 1;

        List<Set<Integer>> dp = new ArrayList<>();
        for (int i = 0; i <= 8; i++) dp.add(new HashSet<>());

        for (int i = 1; i <= 8; i++) {
            int base = repeatN(N, i);
            dp.get(i).add(base);

            for (int j = 1; j < i; j++) {
                for (int a : dp.get(j)) {
                    for (int b : dp.get(i - j)) {
                        dp.get(i).add(a + b);
                        dp.get(i).add(a - b);
                        dp.get(i).add(a * b);
                        if (b != 0) dp.get(i).add(a / b);
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
