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
        System.out.println("t : " + t);
        N = Integer.parseInt(t[0]);
        System.out.println("N : " + N);
        M = Integer.parseInt(t[1]);
        System.out.println("M : " + M);

        know = new boolean[N + 1]; // 아는 사람을 불린. N+1은 왤까?
        System.out.println("know : " + know);
        people = new ArrayList[N + 1];
        System.out.println("people : " + people);
        party = new ArrayList[M];
        System.out.println("party : " + party);

        for (int i=1; i<=N; i++) {
            people[i] = new ArrayList<>();
            System.out.printf("people[%d] : \n" , i);
        }

        for (int i=0; i<M; i++) {
            party[i] = new ArrayList<>();
            System.out.printf("party[%d] : \n" , i);
        }

        t = br.readLine().split(" "); // split 배열이라 무조건 필요

        for (int i=1; i<t.length; i++){
            know[Integer.parseInt(t[i])] = true; // 진실 아는 사람
            System.out.println("know[Integer.parseInt(t[i])] : " + know[Integer.parseInt(t[i])]);
        }

        for (int i=0; i<M; i++) {
            t = br.readLine().split(" ");
            for (int j=1; j<t.length; j++) {
                int tmp = Integer.parseInt(t[j]);
                System.out.println("tmp : " + tmp);
                party[i].add(tmp);
                System.out.println("party[i].add(tmp) : " + party[i].add(tmp));
                people[tmp].add(i);
                System.out.println("people[tmp].add(i) : " + people[tmp].add(i));
            }
        }
        bfs();
    }

    public static void bfs() {
        Queue<Integer> q = new LinkedList<>(); // FIFO(First In First Out)구조
        System.out.println("q : " + q);
        boolean visited[] = new boolean[M];
        System.out.println("visited[] : " + visited);

        for (int i=1; i<=N; i++) {
            if (know[i]) {
                for (int k=1; k<people[i].size(); k++) {
                    System.out.println("visited[people[i].get(k) : " + visited[people[i].get(k)]);
                    if (!visited[people[i].get(k)]) {
                        q.add(people[i].get(k));
                        System.out.println("q.add(people[i].get(k)) : " + q.add(people[i].get(k)));
                        visited[people[i].get(k)] = true;
                        System.out.println("visited[people[i].get(k)] : " + visited[people[i].get(k)]);
                    }
                }
            }
        }

        while (!q.isEmpty()) {
            int a = q.poll(); // 파티번호
            System.out.println("a : " + a);

            for (int num : party[a]) { // num이 참석한 파티정보
                System.out.println("num : " + num);
                for (int partyInfo : people[num]) {
                    System.out.println("partyInfo : " + partyInfo);
                    if (!visited[partyInfo]);
                    System.out.println("visited[partyInfo] : " + visited[partyInfo]);
                    visited[partyInfo] = true;
                    System.out.println("visited[partyInfo] : " + visited[partyInfo]);
                }
            }
        }

        for (int i=0; i<M; i++) {
            if (!visited[i]) {
                System.out.println("ans : " + ans);
                ans++;
            }
        }
        System.out.println(ans);
   }
}
// https://suhyeokeee.tistory.com/223?category=837216