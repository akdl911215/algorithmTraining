package com.company.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class arrangeTheNumber_mergeSort {
    static int N;
    static int[] sorted, resultArr;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        int[] arr = new int[N];

        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }

        mergeSort(arr, 0, N - 1);

        for (int i = 0; i < N; i++) {
            System.out.print(arr[i] + " ");
        }

    }

    static void mergeSort(int arr[], int m, int n) {
        System.out.println("m " + m);
        System.out.println("n " + n);

        for (int i = 0; i < arr.length; i++) {

            System.out.println("arr[] : "+ arr[i]);
        }
        System.out.println("!");

        if (m < n) {
            System.out.println("if 진입");
            int middle = (m + n) / 2;
            mergeSort(arr, m, middle);
            mergeSort(arr, middle + 1, n);
            merge(arr, m, middle, n);
        }
    }

    static void merge(int arr[], int m, int middle, int n) {
        System.out.println("도착?");
        int i = m;
        int j = middle + 1;
        int k = m;
        for (int z = 0; z < arr.length; z++) {
            System.out.printf("arr[%d] = %d\n", z, arr[z]);
        }
        System.out.println("m : " + m);
        System.out.println("middle : " + middle);
        System.out.println("n : " + n);


        sorted = new int[N];

        // 작은 순서대로 배열에 삽입
        while(i <= middle && j <= n) {
            if (arr[i] <= arr[j]) {
                sorted[k] = arr[i];
                i++;
            }
            else {
                sorted[k] = arr[j];
                j++;
            }
            k++;
        }
        
        // 남은 데이터도 삽입
        if (i > middle) {
            for (int z = j; z <= n; z++) {
                sorted[k] = arr[z];
                k++;
            }
        }
        else {
            for (int z = i; z <= middle; z++) {
                sorted[k] = arr[z];
                k++;
            }
        }
        
        // 정렬된 배열을 삽입
        for (int z = m; z <= n; z++) {
            arr[z] = sorted[z];
        }
    }
}
