#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main() {

	// lower_bound : 찾으려는 key 값보다 같거나 큰 숫자가 배열 몇번째에서 처음
	// 등장하는지 찾기 위한 함수
	// 사용조건 : 탐색을 진행할 배열 혹은 벡터는 오름차순 정렬되어 있어야함.

	int arr[6] = { 1, 2, 3, 4, 5, 6 };
	cout << "lower_bound(6) : " << lower_bound(arr, arr + 6, 6) - arr;
	cout << endl;

	vector<int> arr2 = { 1, 2, 3, 4, 5, 6, 6, 6 };
	cout << "lower_bound(6) : " << lower_bound(arr2.begin(), arr2.end(), 6) - arr2.begin();
	cout << endl;

	// upper_bound : 찾으려는 key 값을 초과하는 숫자가 배열 몇번째에서 처음 등장
	// 하는지 찾기 위한 함수
	// 사용조건 : 타맥을 진행할 배열 혹은 벡터는 오름차순 정렬되어 있어야함.

	vector<int> arr3 = { 1, 2, 3, 4, 5, 6 };
	cout << "upper_bound(3) : " << upper_bound(arr3.begin(), arr3.end(), 3) - arr3.begin();
	cout << endl;

	// {1,3,5,5,7,8,8,10,10,11,13} 에서 5 이상 11 이하의 숫자가 몇 개인지 구할 때
	vector<int> arr4 = { 1,3,5,5,7,8,8,10,10,11,13 };
	cout << "5 이상 11 이하의 갯수 : " << upper_bound(arr4.begin(), arr4.end(), 11) - lower_bound(arr4.begin(), arr4.end(), 5);
	cout << endl;

	// 오름차순 정렬된 자료에서 특정한 숫자가 몇 번 나오는지 탐색하고자 할 때
	// 이진 탐색 기반의 lower, upper_bound를 사용하여 O(logN)으로 탐색 가능합니다. 
	// O(N)이 불가능 할 때 유용하게 사용할 수 있습니다.
	vector<int> arr5 = { 1,3,5,5,5,8,8,10,10,11,13 };
	cout << "5의 갯수 : " << upper_bound(arr5.begin(), arr5.end(), 5) - lower_bound(arr5.begin(), arr5.end(), 5);
	cout << endl;



	return 0;

}