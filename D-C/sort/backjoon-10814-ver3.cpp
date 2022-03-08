#include <iostream>
#include <string>
#include <vector>

using namespace std;

int N, numSwap;
string strSwap;
pair<int, string> inputArr;
vector<pair<int, string> > arr;


int main() {
	cin >> N;

	for (int i = 0; i < N; i++) {
		cin >> inputArr.first >> inputArr.second;
		arr.push_back(inputArr);
	}
	
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N - (i + 1); j++) {
			if(arr[j].first > arr[j + 1].first) {
				numSwap = arr[j].first;
				arr[j].first = arr[j + 1].first;
				arr[j + 1].first = numSwap;
				
				strSwap = arr[j].second;
				arr[j].second = arr[j + 1]. second;
				arr[j + 1].second = strSwap;
			}
		}
	}
	
	cout << "arr = \n";
	for (int i = 0; i < N; i++) {
		cout << arr[i].first << " " << arr[i].second << "\n";
	}	
	return 0;
}
