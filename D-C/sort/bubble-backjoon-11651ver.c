#include <stdio.h>
#include <stdlib.h>
#include <algorithm>

arr array[100000];

struct arr {
	int x;
	int y;
};

bool compare(arr const &a, arr const &b) {
	if (a.x == b.x) {
		return a.y < b.y;
	}
}

int main(void) {
	int i = 0, N = 0; x, y;
	scanf("%d ", N);
	
	for (i = 0; i < N; i++) {
		scanf("%d %d", &x, &y);
		array[i] = { x, y };
	}
	
	std::sort(array, array + N, compare);
	
	for (i = 0; i < N; i++){
		printf("%d %d\n", array[i].x, array[i.y]);
	}
}


