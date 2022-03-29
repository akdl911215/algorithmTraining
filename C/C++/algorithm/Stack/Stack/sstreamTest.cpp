#include <sstream>
#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
	string s = "apple lemon grape melon";
	stringstream input(s);
	vector<string> words;
	string word;
	while (getline(s, word, ' '))
	{
		words.push_back(word);
	}


	return 0;
}