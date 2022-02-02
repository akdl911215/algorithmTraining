#include <stdio.h>

int number = 10;
int data[] = {1, 10, 5, 8, 7, 6, 4, 3, 2, 9};

void show() {
	int i;
	for (i = 0; i < number; i++) printf("%d " , data[i]);
}

void quickSort(int *data, int start, int end) {
	printf("start = %d\n", start); 
	if (start >= end) return; // 원소가 1개인 경우 그대로 리턴
	
	int pivot = start; // 피봇은 첫 번째 원소
	int i = start + 1, j = end, temp;
	
	while(i <= j) { // 엇갈릴 때까지 반복 
		while(i <= end && data[i] <= data[pivot]) i++; // 피봇 값보다 큰 값을 만날 때까지
			
		while(j > start && data[j] >= data[pivot]) j--; // 피봇 값보다 작은 값을 만날 떄까지
		
		if(i > j) {
			temp = data[j];
			data[j] = data[pivot];
			data[pivot] = temp;
		} else {
			temp = data[i];
			data[i] = data[j];
			data[j] = temp;
		}
	} 
	
	quickSort(data, start, j - 1);
	quickSort(data, j + 1, end);
	
}

int main(void) {
	quickSort(data, 0, number - 1);
	show();
	
	return 0;
}
