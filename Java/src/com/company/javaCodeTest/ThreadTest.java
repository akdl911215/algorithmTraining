package com.company.javaCodeTest;

public class ThreadTest {

    static class ThreadWithClass extends Thread {
        public void run() {
            for (int i = 0; i < 5; i++) {
                System.out.println("현재 실행중인 스레드의 이름을 반환 : "  + getName());

                try {
                    Thread.sleep(10); // 0.01초간 스레드를 멈춤
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    static class ThreadWithRunnale implements Runnable {
        public void run() {
            for (int i = 0; i < 5; i++) {
                System.out.println("현재 실행중인 스레드의 이름을 반환 : " + Thread.currentThread().getName());

                try {
                    Thread.sleep(10);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public static void main(String[] args) {
        ThreadTest.ThreadWithClass thread = new ThreadTest.ThreadWithClass();
        Thread thread1 = new Thread(new ThreadTest.ThreadWithRunnale());

        thread.start();
        thread1.start();

    }
}
