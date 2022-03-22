#include <iostream>

using namespace std;

int factorial(int num) {
	if (num == 1) return 1;

	return num * factorial(num - 1);
}

int main() {

	int N;
	cin >> N;

	int result = factorial(N);
	cout << result;

	return 0;
}