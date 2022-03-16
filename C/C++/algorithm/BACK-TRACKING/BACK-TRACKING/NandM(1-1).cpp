#include <iostream>

using namespace std;
#define MAX 9

int N, M;
int arr[MAX];
bool visited[MAX];

void dfs(int depth) { // ���� ��ġ
	if (depth == M) { // ��ǥ�� M���� �����ߴٸ�
		for (auto i = 0; i < M; ++i)
			cout << arr[i] << " "; // arr�� ������ �� M�� ��ŭ ���
		cout << endl;
	}
	else { // ��ǥ�� �������� �ʾҴٸ�
		for (auto i = 1; i <= N; ++i) {
			if (!visited[i]) { // �湮 ���ߴٸ�
				visited[i] = true; // �湮 ǥ��
				arr[depth] = i; // i ���� arr�� ����
				dfs(depth + 1); // M���� ���
				visited[i] = false; // ��Ʈ��ŷ ����
			}
		}
	}
}

int main() {
	
	cin >> N >> N;

	return 0;
}