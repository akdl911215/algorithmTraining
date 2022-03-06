#include <iostream>
#define REP(i, a, b) for (int i = a; i < b; i++)

using namespace std;

int n = 4, count = 0;
int col[16];
int diag1[16];
int diag2[16];

void search(int y) {
	if (y == n){
		count++;
		return;
	}
	
	REP(x, 0, n) {
		if (col[x] || diag1[x+y] || diag2[x-y+n-1]) continue;
		col[x] = diag1[x+y] = diag2[x-y+n-1] = 1;
		search(y+1);
		col[x] = diag1[x+y] = diag2[x-y+n-1] = 0;
		
		 	cout << "col[x] : " << col[x] << "\n";
  	cout << "diag1[x+y] : " << diag1[x+y] << "\n";
	cout << "diag2[x-y+n-1] : " << diag2[x-y+n-1] << "\n";	
 	}
 	

	
}

int main(void) {
	
	search(1);
	
	return 0;
} 
