#include <iostream>

using namespace std;

int main() {

//	int n; // int는 범위가 넘어가는 경우가 있다. longlong 으로 하면 해결 ex) n = 138367 등등 
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
