#include <cstdio>
#include <cstdlib>
#include <cstring>

class stars{
public:
	char** arr; // char타입 이차원배열
	stars* small;
	int num;
	stars(int n) {
		num = n;
		if (n > 1)
			small = new stars(n / 3);
		arr = (char**)malloc(n * sizeof(char*));
		for (int i = 0; i < n; ++i)
			arr[i] = (char*)calloc(n + 1, 1);
	}

	~stars() {
		if (small)
			delete small;
		for (int i = 0; i < num; ++i)
			free(arr[i]);
		free(arr);
	}

	char* print(int n) {
		if (num == 1) {
			return '*';
		}
		if (*arr[n])
			return arr[n];
		strcpy(arr[n], small->print(n % (num / 3)));
		if (n / (num / 3) == 1) {
			char* str = new char[num / 3 + 1];
			memset(str, 32, num / 3);
			str[num / 3] = 0;
			strcat(arr[n], str);
			delete[] str;
		}
		else
			strcat(arr[n], small->print(n % (num / 3)));
		strcat(arr[n], small->print(n % (num / 3)));
		return arr[n];
	}
};
int main() {
	int n;
	scanf("%d", &n);
	stars s(n);
	for (int i = 0; i < n; ++i)
		puts(s.print(i)); // 문자열을 표준 출력으로 출력
	// 매개변수로 들어온 char* 타입의 문자열의 주소값으로 문자열의 끝
	// '\0'이 나올때까지의 문자들을 표준출력에 쭉 출력해주다가 다
	// 출력한 후에는 개행해준다.
}