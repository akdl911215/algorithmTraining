package com.company.StringReverse;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.ListIterator;

public class StringReverse3 {
    public static void main(String[] args) {
        String str = "abcde";

        char[] arr = str.toCharArray();
        List<Character> list = new ArrayList<>();
        for (char each : arr) {
            list.add(each);
        }

        Collections.reverse(list);

        // 1. Iterator는 자바의 컬렉션 프레임웍에서 컬렉션에 저장된 요소들을 읽어옴
        // 2. listIterator 인터페이스는 Iterator 인터페이스를 상속받음
        // 3. ListIterator 인터페이스는 List 인터페이스를 구현한 List 컬렉션
        // 클래스에서만 listIterator()메소드를 구현 가능
        ListIterator li = list.listIterator();

        // boolean형 hasNext() 메소드는 읽어 올 요소가 남아 있는지 확인하는 메소드
        // 있으면 true, 없으면 false
        while (li.hasNext()) {
            System.out.print(li.next());
        }
    }
}
