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
        int FOUR_THOUSAND = 4000;
        int sum = 0;

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        arr = new int[80001];
        mergeArr = new int[N];
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;

        // 입력값의 범위 : -4000~ 4000;
        countArr = new int[80001];

        if (N % 2 == 0) {
            System.out.println("N값이 홀수가 아닙니다.");
        }

        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(br.readLine());
            if (max < arr[i]) {
                max = arr[i];
            }
            if (min > arr[i]) {
                min = arr[i];
            }
        }

        // 산술평균 = N개의 수들의 합을 N으로 나눈 값
        int value = 0;
        for (int numValue : arr){
            value += numValue;
        }
        value = value / N;
        System.out.println(value);


        // 중앙값 = N개의 수들을 증가하는 순서대로 나열했을 경우 그 중앙에 위치하는 값
        mergeSort(arr, 0, N - 1);
        // 중앙은 배열 / 2 중앙 위치치
        for (int i = 0; i < mergeArr.length; i++) {
            sum += mergeArr[i];
        }
        System.out.println((int) Math.round((double) sum / N));


        // 최빈값 = N개의 수들 중 가장 많이 나타나는 값
        int mode_max = 0; // 최빈값의 최댓값
        int mode = 10000;
        boolean flag = false;
        for (int i = 0; i < N; i++) {
            countArr[arr[i] + FOUR_THOUSAND]++;
        }

        for (int i = 0; i < N + FOUR_THOUSAND; i++) {

            if (countArr[i] != 0) {
                // 이전 최빈값보다 현재 값의 빈도수가 높을 경우
                if (mode_max < countArr[i]) {
                    mode_max = countArr[i];
                    mode = i - FOUR_THOUSAND;
//                    System.out.println("mode : " + mode);
                    flag = true;
                }
                // 이전 최빈값 최댓값과 동일한 경우면서 한 번만 중복되는 경우
                else if (mode_max == countArr[i] && flag == true) {
                    mode = i - FOUR_THOUSAND;
//                    System.out.println("mode : " + mode);
                    flag = false;
                }
            }
        }
        System.out.println(mode);

        // 범위 = N개의 수들 중 최댓값과 최솟값의 차이
        System.out.println(max - min);
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
