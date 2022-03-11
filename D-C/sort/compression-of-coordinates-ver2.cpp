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
	
	sort(vec.begin(), vec.end());
	vec.resize(unique(vec.begin(), vec.end()) - vec.begin());
	
	for (int x : org)
	{
		int print = lower_boud(vec.begin(), vec.end(), x) - vec.begin();
		cout << print << ' ';
	}
	
	return 0;
}
