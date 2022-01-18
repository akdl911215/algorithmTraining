#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int fibonacciFunc(int num) {
	if (num > 1) return num + fibonacciFunc(num - 1);

	return num;
}

int main() {
	int inputNum;
	scanf("%d", &inputNum);


	printf("%d", fibonacciFunc(inputNum));

	return 0;
}