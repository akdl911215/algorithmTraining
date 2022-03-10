#include <iostream>

using namespace std;

int main() {
	
	int num = 1;
	cout << "2진수 변환 = ";
	for (int i = 31; i >= 0; --i){
		int result = num >> i & 1;
		cout << result << " ";
	} 
	cout << "\n";
	
	// |= : ex) A |= B 는 A와 B를 or연산하여 결과값을 A에 할당한다. 
	
	int x = 0;
	x |= (1<<1); 
	cout << "첫번째 x = " << x << "\n"; // 2
	
	x |= (1<<3);
	cout << "두번째 x = " << x << "\n"; // 10
	
	x |= (1<<4);
	cout << "세번번째 x = " << x << "\n"; // 26
	
	x |= (1<<8);
	cout << "네번째 x = " << x << "\n";	// 282
	
	// 매개변수 x에서 각 비트의 숫자가 1인 개수를 리턴 함수 
	cout << __builtin_popcount(x) << "\n"; // 4
	
	// 집합에 포함된 원소를 모두 출력하는 코드 
	for (int i = 0; i < 32; i++) {
		if (x&(1<<i)) cout << i << " "; // 1 3 4 8
	} 
	return 0;
}
