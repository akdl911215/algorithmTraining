package algorithmStudy.optimization.dynamicProgramming.fibonacciDP;

public class FibonacciDynamicProgramming {

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Fibonacci number at position " + n + " is : " + fibonacci(n));
    }

    public static int fibonacci(int n) {
        if (n <= 1) return n;

        // Create a DP table
        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;

        // Fill the DP table using the recurrence relation
        for (int i = 2; i <= n; ++i) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }
}
