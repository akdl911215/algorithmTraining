#include <stdio.h>

int n;
int arr[10];

int main(void) {
	int i, j, temp, n;
	scanf("%d", &n);
	for(i = 0; i < n; i++) {
		scanf("%d", &arr[i]);
	}

	for(i = 0; i < n; i++) {
		j = i;
		while(j >= 0 && arr[j - 1] > arr[j]) {
			temp = arr[j - 1];
			arr[j - 1] = arr[j];
			arr[j] = temp;
			j--;
		}
		for(j = 0; j <= i; j++) {
			printf("%d ", arr[j]);
		}
		printf("\n");
	}
	return 0;
}
