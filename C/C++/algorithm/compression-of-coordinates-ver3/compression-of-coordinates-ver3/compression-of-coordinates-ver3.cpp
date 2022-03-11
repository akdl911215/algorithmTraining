#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{

	vector<int> vec;
	vector<int> org;

	int N;
	cin >> N;
	for (int i = 0; i < N; i++)
	{
		int x;
		cin >> x;
		vec.push_back(x);
		org.push_back(x);
	}

	// vector<int> a(3, 10)
	// 10���� �ʱ�ȭ�� vector 3�� ����

	// begin() : ������ ù ��° ��Ҹ� ����Ų��.
	// end() : ������ ������ ��Ҹ� ����Ų��.
	sort(vec.begin(), vec.end());

	cout << "sort�� vec.begin() : " << vec.begin() << "\n";

	// resize() : ������ ũ�⸦ ���Ҵ��Ѵ�. > vector.resize(size, value)
	// unique() : vector �迭���� �ߺ����� �ʴ� ������� �տ������� ä�������� �Լ�
	vec.resize(unique(vec.begin(), vec.end()) - vec.begin());

	for (int x : org)
	{
		int print = lower_bound(vec.begin(), vec.end(), x) - vec.begin();
		cout << print << ' ';
	}

	return 0;
}