package com.company.intString;

public class ConvertFromIntegerToString {
    public static void main(String[] args) {

        int i = 1234;

        // 1. 정수에서 스트링으로 변환
        String str = Integer.toString(i);
        System.out.println("1번방식 str = " + str);

        // 2. 정수에서 스트링으로 변환
        String str2 = String.valueOf(i);
        System.out.println("2번방식 str = " + str2);


        String str3 = "1234";

        // 1. 스트링에서 정수로 변환
        int integer1 = Integer.parseInt(str3);
        System.out.println("1번방식 integer1 = " + integer1);

        // 2. 스트링에서 정수로 변환
        int integer2 = Integer.valueOf(str3);
        System.out.println("2번방식 integer2 = " + integer2);

    }
}
