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
	// 10으로 초기화된 vector 3개 생성

	// begin() : 벡터의 첫 번째 요소를 가리킨다.
	// end() : 벡터의 마지막 요소를 가리킨다.
	sort(vec.begin(), vec.end());

	cout << "sort후 vec.begin() : " << vec.begin() << "\n";

	// resize() : 벡터의 크기를 재할당한다. > vector.resize(size, value)
	// unique() : vector 배열에서 중복되지 않는 워노들을 앞에서부터 채워나가는 함수
	vec.resize(unique(vec.begin(), vec.end()) - vec.begin());

	for (int x : org)
	{
		int print = lower_bound(vec.begin(), vec.end(), x) - vec.begin();
		cout << print << ' ';
	}

	return 0;
}