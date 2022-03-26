#include <iostream>
using namespace std;

int main() {

	int** ptr = nullptr;
	ptr = new int*[5];
	for (int i = 0; i < 5; ++i)
		ptr[i] = new int[5];

	for (int i = 0; i < 5; ++i)
		for (int j = 0; j < 5; ++j)
			cout << ptr[i] << " ";
	cout << endl;

	for (int i = 0; i < 5; ++i)
		delete ptr[i];
	delete ptr;

	return 0;
}