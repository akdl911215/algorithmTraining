#include <iostream>
#include <string>
#include <vector>

using namespace std;

int N;
int sorted[20001], resultArr[20001];
pair<int, string> inputArr;
vector<pair<int, string> > arr;

void merge(vector *arr, int m, int middle, int n) {
	int i = m;
	int j = middle + 1;
	int k = m;
	
	while(i <= middle && j <= n){
		if (arr[i] <= arr[j]) {
			sorted[k] = arr[i];
			i++;
		}
		else {
			sorted[k] = arr[j];
			j++;
		}
		k++;
	}
	
	if (i > middle) {
		for (int z = j; z <= n; z++) {
			sorted[k] = arr[z];
			k++;
		}
	}
	else {
		for (int z = i; z <= middle; z++) {
			sorted[k] = arr[z];
			k++;
		}
	}
	

	cout << "sorted : \n";
	for (int z = m; z <=n; z++) {
		cout << sorted[z] << " ";
	}
	cout << "종료\n" << endl;
}

void mergeSort(vector *arr, int m, int n) {
	if (m < n) {
		int middle = (m + n) / 2;
		mergeSort(arr, m, middle);
		mergeSort(arr, middle + 1, n);
		merge(arr, m, middle, n);
	}
}

int main() {
	
	cin >> N;

	
	for (int i = 0; i < N; i++) {
		cin >> inputArr.first >> inputArr.second;
		arr.push_back(inputArr);
	}
	

//	cout << "arr = \n";
//	for (int i = 0; i < N; i++) {
//		cout << arr[i].first << " " << arr[i].second << "\n";
//	}	
	
	cout << "arr = \n" ;
	for (int i = 0; i < N; i++) {
		cout << arr[i].first << " " << arr[i].second << "\n" ;
	}	
	cout << "종료\n" << endl;
	

	mergeSort(vector *arr, int 0, int N - 1);
	
	return 0;
}
