#include <iostream>
#include <bitset> 

using namespace std; 

int main() {
	
	// for������ ���� ��� 
	unsigned int num;
	cout << "unsigned ������ �Է����ּ���.";
	cin >> num; 
	
	cout << "2���� ��ȯ = ";
	// 2���� ���
	for (int i = 31; i >= 0; --i){
		int result = num >> i & 1;
		cout << result << " ";
	} 
	
	
	cout << "\n";
	
	int num2;
	cout << "������ �Է����ּ���.";
	cin >> num2; 
	
	cout << "2���� ��ȯ = ";
	// 2���� ���
	for (int i = 31; i >= 0; --i){
		int result = num2 >> i & 1;
		cout << result << " ";
	} 
	cout << "\n";
	
	// bitset()�� ���� ��� 
	char bit;
	
	cout << "bitset num = ";
	cout << bitset<32>(num); 
	
	return 0;
}
