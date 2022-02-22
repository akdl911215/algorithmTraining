#include <stdio.h>

void main() {

        int N = 0;
		scanf("%d", &N);
        int arr[N][2];
        int tmp, tmp2, i, j;

			
        for(i = 0; i < N; i++){
        	scanf("%d %d", &arr[i][0], &arr[i][1]);
        }


        for (i = 0; i < N; i++) {
            for (j = 0; j < N - (i + 1); j++) {

                    if (arr[j][0] > arr[j + 1][0]) {
                        tmp = arr[j][0];
                        arr[j][0] = arr[j + 1][0];
                        arr[j + 1][0] = tmp;

                        tmp2 = arr[j][1];
                        arr[j][1] = arr[j + 1][1];
                        arr[j + 1][1] = tmp2;
                    }

                    if (arr[j][0] == arr[j + 1][0]) {
                        if (arr[j][1] > arr[j + 1][1]) {
                            tmp = arr[j][0];
                            arr[j][0] = arr[j + 1][0];
                            arr[j + 1][0] = tmp;

                            tmp2 = arr[j][1];
                            arr[j][1] = arr[j + 1][1];
                            arr[j + 1][1] = tmp2;
                        }
                    }
            }
        }

        for (i = 0; i < N; i++) {
        	printf("%d %d\n", arr[i][0], arr[i][1]);
        }
    
}
