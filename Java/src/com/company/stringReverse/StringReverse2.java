package com.company.stringReverse;

public class StringReverse2 {
    public static void main(String[] args) {
        String str = "abcde";

        char[] arr = str.toCharArray(); // String > char[]
        char[] reveseArr = new char[arr.length];
        for (int i=0;i<arr.length;i++) {
            reveseArr[arr.length-1-i] = arr[i];
        }

        String reversedStr = new String(reveseArr);
        System.out.print("reversedStr : " + reversedStr);
    }
}
