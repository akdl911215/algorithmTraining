#include <stdio.h>

int main(void) {
	int i, j, min, index, temp;
	
	// 10���� ������ ������ ����ִ� �迭�� ���� 
	int arr[10] = {10, 1, 3, 8, 7, 6, 4, 5, 2, 9};
	
	for (i = 0; i < 10; i++) {
		// min �� �ּڰ�
		// min���� �ּڰ��� �ֱ����� 10���� ���ں��� ū ���ڸ� �־���´�. 
		min = 1000;
		for (j = i; j < 10; j++) {
			// min ���� �迭�� ���� �۴ٸ� if������ ����. 
			if (min > arr[j]) {
				min = arr[j];
				index = j;
			}
		}
		
		// �ΰ��� ������ ���� �ٲٴ� ��
		// �̰��� �Ϲ������� �������Ѵ� ��� �Ѵ�. 
		temp = arr[i];
		arr[i] = arr[index];
		arr[index] = temp;
	}
	
	for (i = 0; i < 10; i++) {
		printf("%d ", arr[i]); // ��ü �迭�� ��ȸ�ϸ� ��� 
	} 
	
	return 0;
}
