package algorithmStudy.optimization.greedy.coinChangeProblem;

import java.util.Arrays;

public class CoinChange {

    public static void coinChange(int[] coins, int amount) {
        Arrays.sort(coins);
        int count = 0;
        System.out.print("Coins used : ");

        for (int i = coins.length - 1; i >= 0; i--) {
            while (amount >= coins[i]) {
                amount -= coins[i];
                count++;
                System.out.print(coins[i] + " ");
            }
        }

        System.out.println("");
        if (amount > 0 ){
            System.out.println("Cannot make the exact amount with the given coins.");
        } else {
            System.out.println("Minimum coins required: " + amount);
        }
    }

    public static void main(String[] args) {
        int[] coins = {1, 2, 5, 10, 20, 50};
        int amount = 93;
        coinChange(coins, amount);
    }
}
