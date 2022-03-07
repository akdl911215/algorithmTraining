#include <iostream>
#include <string>
#include<algorithm>
using namespace std;

bool compare(string a, string b) {
	if (a.length() != b.length()) {
		return a.length() < b.length();
	}
	
	else {
		return a < b;
	}
}

int main(void) {
	
	int i = 0, word, N;
	string array[20001];
	
	cin >> N;
	for (i = 0; i < N; i++) {
		cin >> array[i];
	}
	
	sort(array, array + N, compare);
	
	for (i = 0; i < N; i++) {
		cout << array[i] << "\n";
	}
	
	return 0;
}
