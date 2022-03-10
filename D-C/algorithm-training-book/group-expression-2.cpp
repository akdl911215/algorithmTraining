#include <iostream>

using namespace std;

int main() {
	
	int x = (1<<1) | (1<<3) | (1<<4) | (1<<8); // 0100011010
	int y = (1<<3) | (1<<6) | (1<<8) | (1<<9); // 1101001000
											   // ----------
											   // 1101011010
	int z = x|y;
	cout << __builtin_popcount(z) << "\n";     // 6
	
	return 0;
}
