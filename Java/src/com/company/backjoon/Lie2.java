package com.company.backjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

public class Lie2 {

    static int N,M; // 참석자 수 = N // 파티의 수 = M
    static int ans = 0; // 아는사람
    static boolean know[];
    static ArrayList<Integer>party[]; // 파티 배열
    static ArrayList<Integer>people[]; // 참석자 배열

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] t = br.readLine().split(" ");// String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔
        N = Integer.parseInt(t[0]);
        M = Integer.parseInt(t[1]);

        know = new boolean[N+1]; // 아는 사람을 불린. N+1은 왤까?
        people = new ArrayList[N+1];
        party = new ArrayList[M];

        for (int i=1; i<=N; i++) {
            people[i] = new ArrayList<>();
        }

        for (int i=0; i<M; i++) {
            party[i] = new ArrayList<>();
        }

        t = br.readLine().split(" "); // split 필요없어보임. 완성 후 결과 비교하기

        for (int i=1; i<t.length; i++){
            know[Integer.parseInt(t[i])] = true; // 진실 아는 사람
        }

        for (int i=0; i<M; i++) {
            t = br.readLine().split(" ");
            for (int j=1; j<t.length; j++) {
                int tmp = Integer.parseInt(t[j]);
                party[i].add(tmp);
                people[tmp].add(i);
            }
        }
        bfs();
    }

    public static void bfs() {
        Queue<Integer> q = new LinkedList<>(); // FIFO(First In First Out)구조
        boolean visited[] = new boolean[M];

        for (int i=1; i<=N; i++) {
            if (know[i]) {
                for (int k=1; k<people[i].size(); k++) {
                    if (!visited[people[i].get(k)]) {
                        q.add(people[i].get(k));
                        visited[people[i].get(k)] = true;
                    }
                }
            }
        }

        while (!q.isEmpty()) {
            int a = q.poll(); // 파티번호

            for (int num : party[a]) { // num이 참석한 파티정보보

            }
        }

   }
}
// https://suhyeokeee.tistory.com/223?category=837216