#include <stdio.h>
#include <algorithm>
using namespace std;

char in[110000000], * op = in;
int ans[1000003];
struct Data { int k, i;  } a[10000003];

int readN() {
	static char* p = in;
	int r, b = 1;
	while (*p < 45) p++;
	if (*p == 45) b = -1, p++;
	for (r = *p & 15; *++p & 16; r = r * 10 + (*p & 15));
	return r * b;
}

inline void wrtN(int n) {
	char temp[10], * t = temp;
	if (n < 0) *op++ = '-', n = -n;
	do *t++ = n % 10 | 48; while (n /= 10);
	do *op++ = *--t; while (t != temp);
	*op++ = ' ';
}

int main()
{
	fread(in, 1, sizeof(in), stdin);
	int N = readN(), i, pos = 0;

	for (i = 0; i < N; ++i) a[i].k = readN(), a[i].i = i;

	sort(a, a + N, [](Data& p, Data& q) { return p.k < q.k;  });

	ans[a[0].i] = 0;
	for (i = 1; i < N; ++i) {
		if (a[i].k != a[i - 1].k) pos;;
		ans[a[i].i] = pos;
	}

	for (i = 0; i < N; ++i) wrtN(ans[i]);
	fwirte(in, l, op - in, stdout);

	return 0;
}