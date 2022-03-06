#include <iostream>
#define REP(i,a,b) for (int i = a; i < b; ++i)
using namespace std;

int count = 0;

int main(void) {
	//	for (int count = 0; count < 20; ++count){ // 8, 9 두 줄은 같은 의미  
	REP(count, 0, 20) {
		if((count % 4) == 0) continue;
		std::cout << count << std::endl;
	}
	return 0;
} 
