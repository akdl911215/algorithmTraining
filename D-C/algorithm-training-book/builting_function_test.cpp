#include <iostream>

using namespace std;

int main() {
	
	// parity : ������ ��Ʈ�� ���� ¦���̸�, �и�Ƽ ��Ʈ�� 1�� �����ϹǷν�
	//  		���۵Ǵ� ��� ��Ʈ�� �հ谡 Ȧ���� �ǵ��� �Ѵ�.
	// ���� ������ ��Ʈ�� ���� �̹� Ȧ�����, �и�Ƽ��Ʈ�� 0���� �����ȴ�. 
	
	cout << "x = 5328\n";
	int x = 5328; 
	cout << __builtin_clz(x) << "\n"; // 19
	cout << __builtin_ctz(x) << "\n"; // 4
	cout << __builtin_popcount(x) << "\n"; // 5
	cout << __builtin_parity(x) << "\n"; // 1
	cout << " ";

	cout << "a = 0\n";
	int a = 0;
	cout << __builtin_clz(a) << "\n"; // 31
	cout << __builtin_ctz(a) << "\n"; // 32
	cout << __builtin_popcount(a) << "\n"; // 0
	cout << __builtin_parity(a) << "\n"; // 0
	cout << " ";
	
	cout << "b = 3\n";
	int b = 3;
	cout << __builtin_clz(b) << "\n"; // 30
	cout << __builtin_ctz(b) << "\n"; // 0
	cout << __builtin_popcount(b) << "\n"; // 2
	cout << __builtin_parity(b) << "\n"; // 0
	
	return 0;
}
