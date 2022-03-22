#include <iostream>

using namespace std;

// N > 3 ũ��, ũŰ N�� ������ �������� ä����
// ����� (N/3)x(N/3) �������� �ѷ��� ����

void star(int i, int j, int N) {
	if ((i / N) % 3 == 1 && (j / N) % 3 == 1)cout << ' ';
	else
		if (N / 3 == 0)cout << '*';
		else star(i, j, N / 3);


}

int main() {

	int N;
	cin >> N;
	for (int i = 0; i < N; ++i)
	{
		for (int j = 0; j < N; ++j)
			star(i, j, N);
		cout << endl;
	}
	return 0;
}
