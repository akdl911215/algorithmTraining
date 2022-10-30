package com.company.programers;

public class DuplicatedStringConcat {
    public static void main(String[] args) {
        Main sol = new Main();
        String s1 = new String("ababc");
        String s2 = new String("abcdab");
        int ret = sol.solution(s1, s2);

        // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
        System.out.println("solution 메소드의 반환 값은 " + ret + " 입니다.");
    }
}

class Main {
    public int solution(String s1, String s2) {
        int answer = 0;
        int len = Math.min(s1.length(), s2.length());
        int idx = 0;

        for (int i = 0; i < len; i++) {
            String sub1 = s1.substring(s1.length() - i -1, s1.length() - 1);
            String sub2 = s2.substring(0, i);
            if(sub1.equals(sub2)) idx = i;
        }

        System.out.println(s1.concat(s2.substring(idx, s2.length()-1)));
        answer = s1.concat(s2.substring(idx, s2.length()-1)).length();

        return answer;
    }
}
