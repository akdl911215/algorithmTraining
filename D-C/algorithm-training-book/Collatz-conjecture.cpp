#include <iostream>

using namespace std;

int main() {

//	int n; // int�� ������ �Ѿ�� ��찡 �ִ�. longlong ���� �ϸ� �ذ� ex) n = 138367 ��� 
	long long n;
	cin >> n;
	
	while (true) {
		cout << n << " ";
		if (n == 1) break;
		if (n%2 == 0) n /= 2;
		else n = n*3+1;
	}
	
	cout << "\n";
}
