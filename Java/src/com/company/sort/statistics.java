package com.company.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class statistics {

    // N = 홀수
    // 산술평균 = N개의 수들의 합을 N으로 나눈 값
    // 중앙값 = N개의 수들을 증가하는 순서대로 나열했을 경우 그 중앙에 위치하는 값
    // 최빈값 = N개의 수들 중 가장 많이 나타나는 값
    // 범위 = N개의 수들 중 최댓값과 최솟값의 차이

    public static int N;
    public static int[] arr, sorted, mergeArr, countArr;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        arr = new int[N];
        mergeArr = new int[N];
        countArr = new int[N];

        if (N % 2 == 0) {
            System.out.println("N값이 홀수가 아닙니다.");
        }

        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }

        // 산술평균 = N개의 수들의 합을 N으로 나눈 값
        int value = 0;
        for (int numValue : arr){
            value += numValue;
        }
        value = value / N;
//        System.out.println("산술평균 = " + value);


        // 중앙값 = N개의 수들을 증가하는 순서대로 나열했을 경우 그 중앙에 위치하는 값
        mergeSort(arr, 0, N - 1);
        // 중앙은 배열 / 2 중앙 위치치
        int pivot = mergeArr.length / 2;
//        System.out.println("중앙값 = " + mergeArr[pivot]);


        // 최빈값 = N개의 수들 중 가장 많이 나타나는 값
        for (int i = 0; i < N; i++) {
            countArr[arr[i]]++;
        }
        for (int i = 0; i < N; i++) {
            System.out.println("최빈값 시작");
            System.out.println(countArr[i]);
        }
    }

    static void mergeSort(int arr[], int m, int n) {

        if (m < n) {
            int middle = (m + n) / 2;
            mergeSort(arr, m, middle);
            mergeSort(arr, middle + 1, n);
            merge(arr, m, middle, n);
        }
    }

    static void merge(int arr[], int m, int middle,int n) {
        int i = m;
        int j = middle + 1;
        int k = m;
        sorted = new int[N];

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

        for (int z = m; z <= n; z++) {
            mergeArr[z] = sorted[z];
        }
    }


}
