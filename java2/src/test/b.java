package test;


import java.util.AbstractMap;

public class b {
    public static int[] solution(int n) {


        String N = String.valueOf(n);
        List<AbstractMap.SimpleEntry<Integer, Integer>> result = new ArrayList<>();

        Queue<String> queue = new LinkedList<>();

        int start = 0;
        int end = N.length() - 1;
        int pivot = 1;
        while (start < end) {
            queue.add(N);
            int count = 0;
            int sum = 0;
            int check = pivot;
            while (!queue.isEmpty()) {
                String base = queue.poll();


                if (base.length() == 1) {
                    break;
                }

                if (check >= base.length()) {
                    check -= 1;
                }

                String part1 = base.substring(0, check);
                String part2 = base.substring(check);

                sum = Integer.parseInt(part1) + Integer.parseInt(part2);
                System.out.println(sum);
                count++;

                queue.add(String.valueOf(sum));
            }

            result.add(new AbstractMap.SimpleEntry<>(count, sum));
            sum = 0;
            start += 1;
            pivot += 1;
        }

        int[][] resultArr = new int[result.size()][2];

        for (int i = 0; i < result.size(); ++i) {
            AbstractMap.SimpleEntry<Integer, Integer> entry = result.get(i);
            resultArr[i][0] = entry.getKey();
            resultArr[i][1] = entry.getValue();
        }

        int[] answer = new int[2];
        for (int i = 0; i < 2; ++i) {
            answer[i] = resultArr[0][i];
        }

        return answer;

    }


    public static void main(String[] args) {
        int n = 73425;
        System.out.println(solution(n));


    }
}
