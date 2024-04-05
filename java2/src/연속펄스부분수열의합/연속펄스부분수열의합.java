package 연속펄스부분수열의합;

class 연속펄스부분수열의합  {

    public static int solution(int[] sequence) {

        boolean pivot = true;
        int[] s1 = new int[sequence.length];
        for (int i = 0; i < sequence.length; ++i) {
            if (pivot) {
                s1[i] = sequence[i];
                pivot = false;
            } else {
                s1[i] = -1 * sequence[i];
                pivot = true;
            }
        }
        int current_max = s1[0];
        int global_max = s1[0];

        int current_max2 = sequence[0] * -1;
        int global_max2 = sequence[0] * -1;

        for (int i = 1; i < s1.length; ++i) {
            int s1Index = s1[i];
            int s2Index = s1[i] * -1;

            current_max = Math.max(s1Index, current_max + s1Index);
            current_max2 = Math.max(s2Index, current_max2 + s2Index);

            global_max = Math.max(global_max, current_max);
            global_max2 = Math.max(global_max2, current_max2);
        }

        return Math.max(global_max, global_max2);
    }


    public static void main(String[] args) {
        int[] sequence = {2, 3, -6, 1, 3, -1, 2, 4};
        System.out.println(solution(sequence));

    }
}

// https://school.programmers.co.kr/learn/courses/30/lessons/152995