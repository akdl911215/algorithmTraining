#include <iostream>

using namespace std;

int main() {
	
	int i, j;
	int arr[3] = {1, 2, 3};
	int n = sizeof(arr) / sizeof(arr[0]);
	
	for (int i = 0; i < (1 << n); i++) { // 1 << n은 2^n 따라서 부분집합의 개수 
		for (int j = 0; j < n; j++) { // 원소의 개수만큼 for문 돌아간다 
			if (i & (1 << j)) { // i & (1 << j) i의 j번째 bit가 1인지 아닌지 확인함 
				cout << arr[j] << " ";
			}
		}
		cout << endl;
	}
	
	return 0;
}
