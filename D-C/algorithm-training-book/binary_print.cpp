#include <iostream>
#include <bitset> 

using namespace std; 

int main() {
	
	// for문으로 보는 방식 
	unsigned int num;
	cout << "unsigned 정수를 입력해주세요.";
	cin >> num; 
	
	cout << "2진수 변환 = ";
	// 2진수 출력
	for (int i = 31; i >= 0; --i){
		int result = num >> i & 1;
		cout << result << " ";
	} 
	
	
	cout << "\n";
	
	int num2;
	cout << "정수를 입력해주세요.";
	cin >> num2; 
	
	cout << "2진수 변환 = ";
	// 2진수 출력
	for (int i = 31; i >= 0; --i){
		int result = num2 >> i & 1;
		cout << result << " ";
	} 
	cout << "\n";
	
	// bitset()로 보는 방식 
	char bit;
	
	cout << "bitset num = ";
	cout << bitset<32>(num); 
	
	return 0;
}
