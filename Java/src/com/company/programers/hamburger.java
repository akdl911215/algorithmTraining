package com.company.programers;

import java.util.ArrayList;

public class hamburger {

    public static int solution(int[] ingredient) {

        int answer = 0;
        ArrayList<Integer> hamList = new ArrayList<>();
        ArrayList<Integer> result = new ArrayList<>();

        result.add(1);
        result.add(2);
        result.add(3);
        result.add(1);
//        System.out.println("result : " + result);

        for(int i = 0; i < ingredient.length; ++i) {
            hamList.add(ingredient[i]);
            System.out.println("hamList : " + hamList);

            System.out.println("hamList.size() : " + hamList.size());
            if (hamList.size() >= 4) {
                System.out.println("check");

                ArrayList<Integer> temList = new ArrayList<>();

                System.out.println("hamList.size() - 4 : " + (hamList.size() - 4));
                temList.add(hamList.get(hamList.size() - 4));
                System.out.println("hamList.size() - 3 : " + (hamList.size() - 3));
                temList.add(hamList.get(hamList.size() - 3));
                System.out.println("hamList.size() - 2 : " + (hamList.size() - 2));
                temList.add(hamList.get(hamList.size() - 2));
                System.out.println("hamList.size() - 1 : " + (hamList.size() - 1));
                temList.add(hamList.get(hamList.size() - 1));

                if (temList.equals(result)) {
                    System.out.println("hamList : " + hamList);
                    answer++;

                    hamList.remove(hamList.size() -1);
                    hamList.remove(hamList.size() -1);
                    hamList.remove(hamList.size() -1);
                    hamList.remove(hamList.size() -1);
                    System.out.println("22 hamList : " + hamList);
                }
            }
        }

        return answer;
    }

    public static void main(String[] args) {
        int[] ingredient = {2, 1, 1, 2, 3, 1, 2, 3, 1};
//        int[] ingredient = {1, 3, 2, 1, 2, 1, 3, 1, 2};
        solution(ingredient);

    }
}
