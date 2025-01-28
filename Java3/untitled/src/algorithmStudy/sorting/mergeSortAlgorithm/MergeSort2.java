package algorithmStudy.sorting.mergeSortAlgorithm;

import java.lang.reflect.Array;
import java.util.Arrays;

public class MergeSort2 {

    // Main function to test the merge sort
    public static void main(String[] args) {
//        int[] array = {38, 27, 43, 3, 9, 82, 10};
        int[] array = {38, 27, 43, 3};
        System.out.println("Original Array : " + Arrays.toString(array));

        mergeSort(array, 0, array.length - 1);
        System.out.println("Sorted Array : " + Arrays.toString(array));
    }

    // Merge Sort function
    public static void mergeSort(int[] array, int left, int right) {
        if (left < right) {
            // Find the middle point
            int middle = left + (right - left) / 2;

            // Sort first and second halves
            mergeSort(array, left, middle);
            mergeSort(array, middle + 1, right);

            // Merge the sorted halves
            merge(array, left, middle, right);
        }
    }

    // Merge two subarrays of array[]
    public static void merge(int[] array, int left, int middle, int right) {
        // Sizes of two subarrays to be merged
        int n1 = middle - left + 1;
        int n2 = right - middle;

        // Create temp arrays
        int [] leftArray = new int[n1];
        int [] rightArray = new int[n2];

        // Copy data to temp arrays
        // System.arraycopy(Object src, int srcPos, Object dest, int destPos, int length);
        // src: The source array to copy from.
        // srcPos: The starting index in the source array to start copying from.
        // dest: The destination array to copy to.
        // destPos: The starting index in the destination array to start inserting elements.
        // length: The number of elements to copy.
        System.arraycopy(array, left, leftArray, 0, n1);
        System.arraycopy(array, middle + 1, rightArray, 0, n2);

        // Merge the temp arrays

        // Initial indexes of first and second subarrays
        int i = 0, j = 0;

        // Initial index of merged subarray
        int k = left;

        while (i < n1 && j < n2) {
            if (leftArray[i] < rightArray[j]) {
                array[k++] = leftArray[i++];
            } else {
                array[k++] = rightArray[j++];
            }
        }

        // Copy remaining elements of LeftArray[] if any
        while (i < n1) {
            array[k++] = leftArray[i++];
        }

        // Copy remaining elements of rightArray[] if any
        while (j < n2) {
            array[k++] = rightArray[j++];
        }
    }

}
