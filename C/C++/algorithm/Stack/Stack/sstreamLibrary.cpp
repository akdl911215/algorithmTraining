#include <sstream>
#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {

	// 공백 기준 문자열 자르기
	string s = "abc def ghi";

	stringstream ss(s);
	ss.str(s);

	string word;
	while (ss >> word)
	{
		cout << word << endl;
	}

	stringstream abc(s);
	abc.str(s);

	cout << endl;

	while (abc >> word)
	{
		cout << word << endl;
	}
	return 0;
}