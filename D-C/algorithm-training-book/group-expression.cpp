#include <iostream>

using namespace std;

int main() {
	
	int num = 1;
	cout << "2���� ��ȯ = ";
	for (int i = 31; i >= 0; --i){
		int result = num >> i & 1;
		cout << result << " ";
	} 
	cout << "\n";
	
	// |= : ex) A |= B �� A�� B�� or�����Ͽ� ������� A�� �Ҵ��Ѵ�. 
	
	int x = 0;
	x |= (1<<1); 
	cout << "ù��° x = " << x << "\n"; // 2
	
	x |= (1<<3);
	cout << "�ι�° x = " << x << "\n"; // 10
	
	x |= (1<<4);
	cout << "������° x = " << x << "\n"; // 26
	
	x |= (1<<8);
	cout << "�׹�° x = " << x << "\n";	// 282
	
	// �Ű����� x���� �� ��Ʈ�� ���ڰ� 1�� ������ ���� �Լ� 
	cout << __builtin_popcount(x) << "\n"; // 4
	
	// ���տ� ���Ե� ���Ҹ� ��� ����ϴ� �ڵ� 
	for (int i = 0; i < 32; i++) {
		if (x&(1<<i)) cout << i << " "; // 1 3 4 8
	} 
	return 0;
}
