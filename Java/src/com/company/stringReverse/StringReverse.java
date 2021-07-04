package com.company.stringReverse;

public class StringReverse {
    public static void main(String[] args) {
        String str = "abcde";

        StringBuffer sb = new StringBuffer(str);
        String reversedStr = sb.reverse().toString();

        System.out.print("reversedStr : " + reversedStr);
    }
}
