package 기능개발;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

public class 기능개발2 {
    public static int[] solution(int[] progresses, int[] speeds) {
        ArrayList<Integer> answer = new ArrayList<>();

        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < progresses.length; ++i) {

            int progress = progresses[i];
            int speed = speeds[i];

            int count = 0;
            while (progress < 100) {
                progress += speed;
                count++;

                if (progress >= 100) {
                    queue.add(count);
                };
            }
        }

        int first = queue.poll();
        int check = 1;
        while (!queue.isEmpty()) {
            int second = queue.peek();

            if (first > second) {
                check++;
                queue.poll();
            } else {
                answer.add(check);
                first = queue.poll();
                check = 1;
            }
        }
        answer.add(check);


        int[] array = answer.stream().mapToInt(i -> i).toArray();
        return array;
    }


    public static void main(String[] args) {
//        int[] progresses = {93, 30, 55};
//        int[] speeds = {1, 30, 5};
        int[] progresses = {95, 95, 95, 95};
        int[] speeds = {4, 3, 2, 1};

        System.out.println(solution(progresses, speeds));
//         [2, 1]
        // [2, 1, 1


//        int[] progresses2 = {95, 90, 99, 99, 80, 99};
//        int[] speeds2 = {1, 1, 1, 1, 1, 1};
//
//        System.out.println(solution(progresses2, speeds2));
        // [1, 3, 2]
    }
}
