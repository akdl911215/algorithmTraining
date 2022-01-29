#include <stdio.h>

int main(void) {
	int i, j, min, index, temp;
	
	// 10개의 임의의 순서로 들어있는 배열을 생성 
	int arr[10] = {10, 1, 3, 8, 7, 6, 4, 5, 2, 9};
	
	for (i = 0; i < 10; i++) {
		// min 은 최솟값
		// min에는 최솟값을 넣기위해 10개의 숫자보다 큰 숫자를 넣어놓는다. 
		min = 1000;
		for (j = i; j < 10; j++) {
			// min 보다 배열의 값이 작다면 if문으로 들어간다. 
			if (min > arr[j]) {
				min = arr[j];
				index = j;
			}
		}
		
		// 두개의 원소의 값을 바꾸는 것
		// 이것을 일반적으로 스와핑한다 라고 한다. 
		temp = arr[i];
		arr[i] = arr[index];
		arr[index] = temp;
	}
	
	for (i = 0; i < 10; i++) {
		printf("%d ", arr[i]); // 전체 배열값 순회하며 출력 
	} 
	
	return 0;
}
