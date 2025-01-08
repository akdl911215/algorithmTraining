package algorithmStudy.sorting.quickSortAlgorithm;

import java.util.Arrays;

public class HoarePartitioningQuickSort {
    public static void main(String[] args) {
        int[] array = { 10, 7, 8, 9, 1, 5 };
        quickSort(array, 0, array.length - 1);
        System.out.println("Sorted array : " + Arrays.toString(array));
    }

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int partitionIndex = partition(arr, low, high);

            quickSort(arr, low, partitionIndex);
            quickSort(arr, partitionIndex + 1, high);
        }
    }

    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[low];

        while (true) {
            // Move high pointer leftward
            while (arr[high] > pivot) {
                high--;
            }

            // Move low pointer rightward
            while (arr[low] < pivot) {
                low++;
            }

            // If pointers cross, return the partition index
            if (low >= high) {
                return high;
            }

            // Swap elements at Low and high
            int temp = arr[low];
            arr[low] = arr[high];
            arr[high] = temp;
        }
    }
}
