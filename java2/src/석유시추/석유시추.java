package 석유시추;

import java.util.LinkedList;
import java.util.Queue;

public class 석유시추 {
    public static int solution(int[][] land) {

        int[][] confirmedLocation = new int[land.length][land[0].length];
        Queue<int []> queue = new LinkedList<>();

        int loopExit = 0;
        for (int i = 0; i < land.length; ++i) {
            for (int j = 0; j < land[0].length; ++j) {
                queue.add(new int[]{i, j});
//                confirmedLocation[i][j] = 1;
                loopExit = 1;
                break;
            }
            if (loopExit == 1) break;
        }

        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        for (int i = 0; i < land.length; ++i) {
            for (int j = 0; j < land[0].length; ++j) {
                if (land[i][j] == 1 && confirmedLocation[i][j] == 0) {
                    while (!queue.isEmpty()) {
                        confirmedLocation[i][j] = 1;

                        int[] direction = queue.poll();
                        int dx = direction[0];
                        int dy = direction[1];

                        for (int k = 0; k < 4; ++k) {
                            int x = directions[k][0];
                            int y = directions[k][1];

                            if ()
                        }

                    }
                }
            }
        }

        return 0;
    }


    public static void main(String[] args) {
        int[][] land = {{0, 0, 0, 1, 1, 1, 0, 0}, {0, 0, 0, 0, 1, 1, 0, 0}, {1, 1, 0, 0, 0, 1, 1, 0}, {1, 1, 1, 0, 0, 0, 0, 0}, {1, 1, 1, 0, 0, 0, 1, 1}};
        System.out.println(solution(land));
    }
}
