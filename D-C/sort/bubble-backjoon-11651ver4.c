#include <stdio.h>

int main() {
	int N = 0; 
	scanf("%d", &N);
	int arr[N][2];
	int sumArr[N];
	int tmp, tmp2, tmp3, i, j;
	
	for (i = 0; i < N; i++) {
		scanf("%d %d", &arr[i][0], &arr[i][1]);
	}
	
	for (i = 0; i < N; i++) {
		sumArr[i] = arr[i][0] + arr[i][1] + 100000;
	}
	
//	for (i = 0; i < N; i++) {
//		printf("%d ", sumArr[i]);
//	}
//	
	for (i = 0; i < N; i++) {
		if (sumArr[i] > sumArr[i + 1]) {
			tmp = arr[i][0];
			arr[i][0] = arr[i + 1][0];
			arr[i + 1][0] = arr[i][0];
			
			tmp2 = arr[i][1];
			arr[i][1] = arr[i + 1][1];
			arr[i + 1][1] = tmp2;
			
			tmp3 = sumArr[i];
			sumArr[i] = sumArr[i + 1];
			sumArr[i + 1] = tmp3;
		}
		
		if (sumArr[i] == sumArr[i + 1]) {
			if (arr[i][0] > arr[i + 1][0]) {
				tmp = arr[i][0];
				arr[i][0] = arr[i + 1][0];
				arr[i + 1][0] = arr[i][0];
				
				tmp2 = arr[i][1];
				arr[i][1] = arr[i + 1][1];
				arr[i + 1][1] = tmp2;
				
				tmp3 = sumArr[i];
				sumArr[i] = sumArr[i + 1];
				sumArr[i + 1] = tmp3;
			}
		}
	}
	
        for (i = 0; i < N; i++) {
        printf("%d %d\n", arr[i][0], arr[i][1]);
        }
	return 0;
}
