#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
// #include : ��ó����(preprocessor)
// <stdio.h> : standard input output 
// h : header ����

int fact(int num) {
	if (num > 1) return num * fact(num - 1);
	else if (num == 1) return 1;
	
}

int main() {
	int num;
	scanf("%d", &num);
	printf("%d", fact(num));

	return 0;
}