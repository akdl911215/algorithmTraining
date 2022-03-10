#include <iostream>

using namespace std;

int main() {
	
	int i, j;
	int arr[3] = {1, 2, 3};
	int n = sizeof(arr) / sizeof(arr[0]);
	
	for (int i = 0; i < (1 << n); i++) { // 1 << n�� 2^n ���� �κ������� ���� 
		for (int j = 0; j < n; j++) { // ������ ������ŭ for�� ���ư��� 
			if (i & (1 << j)) { // i & (1 << j) i�� j��° bit�� 1���� �ƴ��� Ȯ���� 
				cout << arr[j] << " ";
			}
		}
		cout << endl;
	}
	
	return 0;
}
