package algorithmStudy.optimization.dynamicProgramming.fibonacciDP;

import java.util.HashMap;
import java.util.Map;

public class fibonacciDynamicProgramming2 {

    private static Map<Integer, Integer> memo = new HashMap<>();

    public static void main(String[] args) {
        int n = 10;
        System.out.print("Fibonacci sequence up to position " + n + ": " + fibonacci(n));
    }

    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }

        if (memo.containsKey(n)) {
            return memo.get(n);
        }

        // Recursive call: F(n) = F(n - 1) + F(n - 2)
        int first = fibonacci(n - 1);
        int second = fibonacci(n - 2);
        int result = first + second;
        memo.put(n, result);

        return result;
    }
}
