package pattern;

interface SortingStrategy {
   public int[] sort(int[] data);
}

class BubbleSort implements SortingStrategy {
    @Override
    public int[] sort(int[] data) {
        return new int[0];
    }
}

public class StrategyPattern {
}
