package billiardsPractice;

public class billiardsPractice {
    public static void main(String[] args) {
        System.out.println("start");

        int[][] balls = {{7, 7}, {2, 7}, {7, 3}};
        int[] result = solution(10, 10, 3, 7, balls);

        for (int i = 0; i < result.length; ++i) {
            System.out.println(result[i] + " ");
        }
    }

    public static int[] solution(int m, int n, int startX, int startY, int[][] balls) {
        int[] answer = {};

        for (int[] ball: balls) {
            int x = ball[0];
            int y = ball[1];

            int minValue = 999999;

            if (!(x == startX && y > startY)) {
                int distance = getDistance(startX, startY, x, 2 * n - y);
                if (minValue > distance) minValue = distance;
            }
        }

        return answer;
    }

    public static int getDistance(int x1, int y1, int x2, int y2) {
        return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    }
}


// solution(10, 10, 3, 7, [[7, 7], [2, 7], [7, 3]])
// [52, 37, 116]

// https://school.programmers.co.kr/learn/courses/30/lessons/169198