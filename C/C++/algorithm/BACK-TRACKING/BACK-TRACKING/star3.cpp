#include <stdio.h>
#include <iostream>
#pragma warning(disable:4996)

const int MININUM_UNIT = 3;
int n;
char** result;

void inputStar(int num, int rowIndex, int colIndex) {
	if (num < n && rowIndex == 0 && colIndex == 0) {
		inputStar(num * 3, 0, 0);
	}

	int startIndex = num / MININUM_UNIT;
	int endIndex = (num / MININUM_UNIT) * 2;

	for (int i = startIndex + rowIndex; i < endIndex + rowIndex; ++i) {
		for (int j = startIndex + colIndex; j < endIndex + colIndex; ++j) {
			result[i][j] = ' ';
		}
	}

	if (rowIndex + num > n - 1 && colIndex + num > n - 1) {
		return;
	}
	if (rowIndex + num > n - 1) {
		inputStar(num, 0, colIndex + num);
		return;
	}
	inputStar(num, rowIndex + num, colIndex);
}

int main() {
	scanf("%d", &n);

	result = new char* [n];
	for (int i = 0; i < n; ++i) {
		result[i] = new char[n + 1];
		for (int j = 0; j < n; ++j) {
			result[i][j] = '*';
		}
	}

	inputStar(MININUM_UNIT, 0, 0);

	for (int i = 0; i < n; ++i) {
		result[i][n] = '\0';
		printf("%s\n", result[i]);
	}

	return 0;
}