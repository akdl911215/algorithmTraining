#include <iostream>

using namespace std;

int main()
{

	cout << "++i for test = ";
	for (int i = 0; i < 10; ++i) cout << i << " ";
	cout << endl;

	cout << "i++ for test = ";
	for (int i = 0; i < 10; i++) cout << i << " ";
	cout << endl;

	return 0;
}