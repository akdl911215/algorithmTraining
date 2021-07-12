package com.company.backjoon;

import javax.swing.event.InternalFrameEvent;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Lie {
    public static void main(String[] args) throws IOException {

        // 지민 if 거짓말 else 아닐때
        // 진실을 아는사람은 N > 번호가 주어짐
        // 첫째줄, 파티오는사람 수 N , 파티의 수 M > 랜덤으로 50이하 출력
        //        진실을 아는람수와 파티마다 오는 사람수 0~50
        // 둘째줄, 진실아는 사람의 수와 번호 부여 > boolean 으로 배열에 1값을 넣어준다?
        //        전체 사람에게 숫자부여(진실아는사람순)
        // 셋째줄, M개의 줄에는 각 파티마다 오는 살마의 수와 번호가 같은 방식으로 주어진다
        // N,M은 50이하의 자연수, 진실아는사람 수와 파티오는 사람수는 0~50

        // 출력 = M개의 파티수에 - 진실 수

        // 진실아는 사람은 for문
        // 오는 사람들 숫자는 랜덤 부여
        // in문으로 count를 세서 거짓말 가능한 파티 체크

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine()); // 파티 오는사람
        int M =  Integer.parseInt(br.readLine()); // 파티 수
        System.out.printf("파티 오는 사람 수 = %d, 파티의 수 = %d\n", N, M);

        int peopleThuth = Integer.parseInt(br.readLine()); // 진실을 아는 사람
        int[] peopleThuthArr = new int[peopleThuth];
        System.out.printf("진실 아는사람 수 = %d\n", peopleThuth);

        // 진실 아는 사람 수 번호를 위한 boolean for
//        for (int i = 0; i < peopleThuthArr.length; i++) {
//            peopleThuthArr[i] = 1;
//            System.out.print("진실아는 사람의 ");
//        }

        // 진실 아는 사람 번호 부여
        for (int i = 0; i < peopleThuthArr.length; i++) {
            int peopleThuthNum = peopleThuthArr[i] + (i + 1);
            System.out.println("진실 아는 사람 번호 부여 = " + peopleThuthNum);
        }

        int[] partyAttendees = new int[N];
        // 파티 총 참석자 번호 부여
        for (int i = 0; i < partyAttendees.length; i++) {
           partyAttendees[i] = (int)((Math.random() * 50) + 1);
            for (int j = 0; j < i; j++) {
                if (partyAttendees[i] == partyAttendees[j]){
                    i--;
                }
            }
        }
        for (int k = 0; k < partyAttendees.length; k++) {
            System.out.printf("a[%d] 값 = %d\n", k, partyAttendees[k]);
        }
    }

    // https://geojun.tistory.com/36
}
