package 구명보트;
import java.util.Arrays;

public class 구명보트 {
    public static int solution(int[] people, int limit) {
        Arrays.sort(people);

        int start = 0;
        int end = people.length - 1;

        int rescue = 0;
        while (start <= end) {
            if (people[start] + people[end] > limit) {
                rescue++;
                end--;
            } else {
                rescue++;
                end--;
                start++;
            }
        }

        return rescue;
    }


    public static void main(String[] args) {
//        int[] people = {70, 50, 80, 50};
//        int limit = 100;
//        System.out.println(solution(people, limit));
        // 3

        int[] people2 = {70, 80, 50};
        int limit2 = 100;
        System.out.println(solution(people2, limit2));
        // 3

    }
}


// https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=java