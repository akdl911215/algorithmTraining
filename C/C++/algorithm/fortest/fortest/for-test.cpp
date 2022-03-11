#include <iostream>
#include <vector>

using namespace std;

int main()
{
	int x[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

	for (int y : x)
	{
		cout << y << " ";
	}
	cout << endl;

	// auto 키워드를 사용하면 초깃값의 형식에 맞춰 선언하는 인스턴스(변수)의
	// 형시이 '자동'으로 결정된다. 이것을 타입 추론(type inference)이라고 한다.
	for (auto y : x)
	{
		cout << y << " ";
	}
	cout << endl;

	for (auto& y : x)
	{
		cout << y << " ";
	}
	cout << endl;

	for (const auto& y : x)
	{
		cout << y << " ";
	}
	cout << endl;

	cout << "end of integer array test" << endl;
	cout << endl;

	vector<double> v;
	for (int i = 0; i < 10; ++i) {
		v.push_back(i + 0.14159);
	}

	for (const auto& j : v)
	{
		cout << j << " ";
	}
	cout << endl;
	cout << "end of vector test" << endl;
 }