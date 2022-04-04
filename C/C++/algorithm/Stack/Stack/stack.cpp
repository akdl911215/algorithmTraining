#include <iostream>
#include <stack>
#include <string>
using namespace std;

int main(void) {

	int N;
	cin >> N;
	stack<int> stack;
	string str;
	
	for (int i = 0; i < N; i++) {
		cin >> str;
		if (str == "push") {
			int num;
			cin >> num;
			stack.push(num);
		} else if (str == "pop") {
			if (!stack.empty()) {
				cout << stack.top() << endl;
				stack.pop();
			} else {
				cout << "-1" << endl;
			}
		} else if (str == "size") {
			cout << stack.size() << endl;
		} else if (str == "empty") {
			if (str.empty()) {
				cout << "1" << endl;
			}
			else {
				cout << "0" << endl;
			}
		} else if (str == "top") {
			if (!str.empty()) {
				cout << stack.top() << endl;
			}
			else {
				cout << "-1" << endl;
			}
		}
	}
	return 0;
}