#include <iostream>

using namespace std;

int main() {

	int value = 5;
	int* ptr = &value;
	int** ptrptr = &ptr; // �������� ������. ������ ���� ptr�� �ּҰ�

	cout << value << '\n';  // 5
	cout << &value << '\n'; // 000000B0ADCFF954
	cout << ptr << '\n';	// 000000B0ADCFF954
	cout << ptrptr;			// 000000B0ADCFF978



	return 0;
}