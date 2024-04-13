package test;


import java.util.*;

public class a {
    public static int[] solution(int[][] contents, int k, int p) {
        int[] answer = {};

        List<Integer> contentList = new ArrayList<>();
        if (contents.length == k) {
            for (int i = 0; i < k; ++i) {
                contentList.add(i);
            }

            for (int i = 0; i < contentList.size(); ++i) {
                answer[i] = contentList.get(i);
            }

            return answer;
        }

        List<Map<Integer, Integer>> abilityList = new ArrayList<>();
        for (int i = 0; i < contents.length; ++i) {
            int count = 0;
            for (int j = 0; j < contents[0].length; ++j) {
                if (p >= contents[i][j]) {
                    count++;
                }
            }

            Map<Integer, Integer> map = new HashMap<>();
            map.put(i, count);
            abilityList.add(map);
        }

        int x = abilityList.size();
        int y = abilityList.get(0).size() + 1;
        int[][] abilityArr = new int[x][y];
        int row = 0;
        for (Map<Integer, Integer> map : abilityList) {
            int col = 0;

            for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
                abilityArr[row][col] = entry.getKey();
                col++;
                abilityArr[row][col] = entry.getValue();
            }
            row++;
        }


        Arrays.sort(abilityArr, Comparator.comparingInt(a -> a[1]));
        int[][] result = Arrays.copyOfRange(abilityArr, abilityArr.length - k, abilityArr.length);

        boolean sameValue = true;
        for (int i = 1; i < result.length; ++i) {
            if (result[i][1] != result[0][1]) {
                sameValue = false;
                break;
            }
        }
        if (sameValue) Arrays.sort(result, Comparator.comparingInt(a -> a[0]));


        return answer;

    }


    public static void main(String[] args) {
        int[][] contents = {{1,5,2,3}, {9,9,9,9}, {1,9,3,9}, {4,3,2,1}};
        int k = 2;
        int p = 4;
        System.out.println(solution(contents, k, p));


    }
}
