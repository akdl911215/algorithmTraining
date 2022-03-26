#include <iostream>

using namespace std;

int main() {

	int value = 5;
	int* ptr = &value;
	int** ptrptr = &ptr; // 포인터의 포인터. 포인터 변수 ptr의 주소값

	cout << value << '\n';  // 5
	cout << &value << '\n'; // 000000B0ADCFF954
	cout << ptr << '\n';	// 000000B0ADCFF954
	cout << ptrptr;			// 000000B0ADCFF978



	return 0;
}