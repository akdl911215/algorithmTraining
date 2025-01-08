package algorithmStudy.sorting.quickSortAlgorithm;

import java.util.Arrays;

// 한쪽 방향으로만 퀵 정렬 알고리즘
public class LomutoPartitioningQuickSort {
    public static void main(String[] args) {
        int[] array = { 10, 7, 8, 9, 1, 5 };
        quickSort(array, 0, array.length - 1);
        System.out.println("Sorted array: " + Arrays.toString(array));
    }

    // QuickSort function
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // Partition the array and get the pivot index
            int pivot = partition(arr, low, high);

            // Recursively sort elements before and after partition
            quickSort(arr, low, pivot - 1);
            quickSort(arr, pivot + 1, high);
        }
    }

    // Partition function
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // Choose the last element as pivot
        int i = low - 1; // Pointer for smaller element

        for (int j = low; j < high; j++) {
            // If the current element is smaller than the pivot
            if (arr[j] < pivot) {
                i++;
                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        // Swap arr[i + 1] and pivot (arr[high])
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1; // Return the partition index
    }
}
