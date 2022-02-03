#include <stdio.h>
#define MAX_SIZE 9
#define SWAP(x, y, temp) ( (temp)=(x), (x)=(y), (y)=(temp) )

int partition(int list[], int start, int end) {
	int pivot, temp, low, high;
	
	low = start;
	high = end + 1;
	pivot = list[start];
	
	do{
		do {
			low++;
			printf("low++ = %d \n", low);
		} while (low <= end && list[low] < pivot);
		
		do {
			high--;
			printf("high-- = %d \n", high);
		} while (high >= start && list[high] > pivot);
		
		if(low < high) { 
			printf("if¹® = %d < %d\n", low, high);
			SWAP(list[low], list[high], temp);
		}
		
		for(int i = 0; i < end; i++) {
			printf("list = %d \n", list[i]);
		}
	} while (low < high);
	
	SWAP(list[start], list[high], temp);
	
	return high;
} 

// Äü Á¤·Ä
void quick_sort(int list[], int start, int end) {
	if(start < end) {
		int q = partition(list, start, end);
		
		quick_sort(list, start, q-1);
		quick_sort(list, q+1, end);
	}
} 

int main() {
	int i;
	int n = MAX_SIZE;
	int list[n] = {5, 3, 8, 4, 9, 1, 6, 2, 7};
	
	// Äü Á¤·Ä ¼ö 
	quick_sort(list, 0, n-1);
	
	for(i = 0; i < n; i++) {
		printf("%d ", list[i]);
	}
	
	return 0;
}
