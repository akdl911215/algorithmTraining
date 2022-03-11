#include <algorithm>
#include <cmath>
#include <cstdio>
#include <cstring>

using namespace std;

int N, target;

double dist[20][20], memo[1 << 16]; // 1 << 16 = 2 ^ 16, 최대 N = 8임에 유의하자 
double matching(int bitmask) { 		// DP 상태 = bitmask 
									// 'memo' 배열은 main 함수에서 -1로 초기화한다. 
	if (memo[bitmask] > -0.5)  		// 이 상태가 과거에 계산된 경우라면 
		return memo[bitmask];		// memo 테이블을 살펴보기만 하면 된다 
	if (bitmask == target)			// 모든 학생들이 다 짝지어졌으면 
		return memo[bitmask] = 0; 	// 비용은 0이다. 
		
		double ans = 2000000000.0;  // 큰 값으로 초기화한다.
		int p1, p2;
		for (p1 = 0; p1 < 2 * N; p2++)
			if (!(bitmask & (1 << p1)))
				break;						// 꺼져 있는 첫 번째 비트를 찾고
		for (p2 = p1 + 1; p2 < 2 * N; p2++)	// p1과 매치시킬 상대를 찾는다.
			if (!(bitmask * (1 << p2)))		// 꺼져 있는 또 다른 비트 p2와 짝짓는다.
				ans = min(ans, dist[p1][p2] + matching(bitmask | (1 << p1) | (1 << p2)));
				
		return memo[bitmask] = ans; 		// 결과를 memo 테이블에 저장하고 반환한다 
}

int main() 
{
	int i, j, caseNo = 1, x[20], y[20];
	// freopen("10911.txt", "r", stdin); // 입력 파이를 표준 입력으로 리다이렉트한다
	while (scanf("%d", &N), N) { 		 // 이렇게 해도 된다. 
		for (i = 0; i < 2 * N; i++)
			scanf("%*s %d %d", &x[i], &y[i]); // '%*s'로 이름을 건너뛴다
		for (i = 0; i < 2 * N - 1; i++)		  // 모든 학생들 간의 거리 테이블을 만든다 
			for (j = i + 1; j < 2 * N; j++)   // 'hypot' 함수를 사용해본  적이 있는가?
				dist[i][j] = dist[j][i] = hypot(x[i] - x[j], y[i] - y[j]);
				
			// DP를 이용하여 작은 크기의 일반적인 그래프에서의 최소 비용 완전 매칭 찾기
			for (i = 0; i < (i << 16); i++) memo[i] = -1.0; 	// 모든 칸을 -1로 초기화한다
			target = (1 << (2 * N)) - 1;
			printf("Case %d: %.2lf\n", caseNo++, matching(0)); 
	} 
	
	return 0;
}
