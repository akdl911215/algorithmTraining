package 기능개발;

import java.util.ArrayList;
import java.util.Arrays;

public class 기능개발 {
    public static int[] solution(int[] progresses, int[] speeds) {
        ArrayList<Integer> answer = new ArrayList<>();

        ArrayList<Integer> processList = new ArrayList<>();
        for (int i = 0; i < progresses.length; ++i) {

            int progress = progresses[i];
            int speed = speeds[i];

            int count = 0;
            while (progress < 100) {
                progress += speed;
                count++;

                if (progress >= 100) {
                    processList.add(count);
                };
            }
        }

        int[] arr = processList.stream().mapToInt(i -> i).toArray();
        int pivot = arr[0];
        int check = 1;
        int start = 1;
        while (start < arr.length) {
            int process = arr[start];

            if (pivot > process) {
                check++;
            } else {
                answer.add(check);
                check = 1;
            }

            start++;
            if (start == arr.length) {
                answer.add(check);
            };
        }


        int[] array = answer.stream().mapToInt(i -> i).toArray();
        return array;
    }


    public static void main(String[] args) {
        int[] progresses = {93, 30, 55};
        int[] speeds = {1, 30, 5};

        System.out.println(solution(progresses, speeds));
        // [2, 1]


//        int[] progresses2 = {95, 90, 99, 99, 80, 99};
//        int[] speeds2 = {1, 1, 1, 1, 1, 1};
//
//        System.out.println(solution(progresses2, speeds2));
        // [1, 3, 2]
    }
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42586
