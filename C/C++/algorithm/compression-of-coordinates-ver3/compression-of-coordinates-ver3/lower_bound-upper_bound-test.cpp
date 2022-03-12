#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main() {

	// lower_bound : ã������ key ������ ���ų� ū ���ڰ� �迭 ���°���� ó��
	// �����ϴ��� ã�� ���� �Լ�
	// ������� : Ž���� ������ �迭 Ȥ�� ���ʹ� �������� ���ĵǾ� �־����.

	int arr[6] = { 1, 2, 3, 4, 5, 6 };
	cout << "lower_bound(6) : " << lower_bound(arr, arr + 6, 6) - arr;
	cout << endl;

	vector<int> arr2 = { 1, 2, 3, 4, 5, 6, 6, 6 };
	cout << "lower_bound(6) : " << lower_bound(arr2.begin(), arr2.end(), 6) - arr2.begin();
	cout << endl;

	// upper_bound : ã������ key ���� �ʰ��ϴ� ���ڰ� �迭 ���°���� ó�� ����
	// �ϴ��� ã�� ���� �Լ�
	// ������� : Ÿ���� ������ �迭 Ȥ�� ���ʹ� �������� ���ĵǾ� �־����.

	vector<int> arr3 = { 1, 2, 3, 4, 5, 6 };
	cout << "upper_bound(3) : " << upper_bound(arr3.begin(), arr3.end(), 3) - arr3.begin();
	cout << endl;

	// {1,3,5,5,7,8,8,10,10,11,13} ���� 5 �̻� 11 ������ ���ڰ� �� ������ ���� ��
	vector<int> arr4 = { 1,3,5,5,7,8,8,10,10,11,13 };
	cout << "5 �̻� 11 ������ ���� : " << upper_bound(arr4.begin(), arr4.end(), 11) - lower_bound(arr4.begin(), arr4.end(), 5);
	cout << endl;

	// �������� ���ĵ� �ڷῡ�� Ư���� ���ڰ� �� �� �������� Ž���ϰ��� �� ��
	// ���� Ž�� ����� lower, upper_bound�� ����Ͽ� O(logN)���� Ž�� �����մϴ�. 
	// O(N)�� �Ұ��� �� �� �����ϰ� ����� �� �ֽ��ϴ�.
	vector<int> arr5 = { 1,3,5,5,5,8,8,10,10,11,13 };
	cout << "5�� ���� : " << upper_bound(arr5.begin(), arr5.end(), 5) - lower_bound(arr5.begin(), arr5.end(), 5);
	cout << endl;



	return 0;

}