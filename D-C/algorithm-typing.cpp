#include <algorithm>
#include <cmath>
#include <cstdio>
#include <cstring>

using namespace std;

int N, target;

double dist[20][20], memo[1 << 16]; // 1 << 16 = 2 ^ 16, �ִ� N = 8�ӿ� �������� 
double matching(int bitmask) { 		// DP ���� = bitmask 
									// 'memo' �迭�� main �Լ����� -1�� �ʱ�ȭ�Ѵ�. 
	if (memo[bitmask] > -0.5)  		// �� ���°� ���ſ� ���� ����� 
		return memo[bitmask];		// memo ���̺��� ���캸�⸸ �ϸ� �ȴ� 
	if (bitmask == target)			// ��� �л����� �� ¦���������� 
		return memo[bitmask] = 0; 	// ����� 0�̴�. 
		
		double ans = 2000000000.0;  // ū ������ �ʱ�ȭ�Ѵ�.
		int p1, p2;
		for (p1 = 0; p1 < 2 * N; p2++)
			if (!(bitmask & (1 << p1)))
				break;						// ���� �ִ� ù ��° ��Ʈ�� ã��
		for (p2 = p1 + 1; p2 < 2 * N; p2++)	// p1�� ��ġ��ų ��븦 ã�´�.
			if (!(bitmask * (1 << p2)))		// ���� �ִ� �� �ٸ� ��Ʈ p2�� ¦���´�.
				ans = min(ans, dist[p1][p2] + matching(bitmask | (1 << p1) | (1 << p2)));
				
		return memo[bitmask] = ans; 		// ����� memo ���̺� �����ϰ� ��ȯ�Ѵ� 
}

int main() 
{
	int i, j, caseNo = 1, x[20], y[20];
	// freopen("10911.txt", "r", stdin); // �Է� ���̸� ǥ�� �Է����� �����̷�Ʈ�Ѵ�
	while (scanf("%d", &N), N) { 		 // �̷��� �ص� �ȴ�. 
		for (i = 0; i < 2 * N; i++)
			scanf("%*s %d %d", &x[i], &y[i]); // '%*s'�� �̸��� �ǳʶڴ�
		for (i = 0; i < 2 * N - 1; i++)		  // ��� �л��� ���� �Ÿ� ���̺��� ����� 
			for (j = i + 1; j < 2 * N; j++)   // 'hypot' �Լ��� ����غ�  ���� �ִ°�?
				dist[i][j] = dist[j][i] = hypot(x[i] - x[j], y[i] - y[j]);
				
			// DP�� �̿��Ͽ� ���� ũ���� �Ϲ����� �׷��������� �ּ� ��� ���� ��Ī ã��
			for (i = 0; i < (i << 16); i++) memo[i] = -1.0; 	// ��� ĭ�� -1�� �ʱ�ȭ�Ѵ�
			target = (1 << (2 * N)) - 1;
			printf("Case %d: %.2lf\n", caseNo++, matching(0)); 
	} 
	
	return 0;
}
