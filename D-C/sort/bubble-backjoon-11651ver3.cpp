#include <stdio.h>
#include <stdlib.h>
#include <algorithm>
#include <iostream>
using namespace std;

struct arr {
    int m_x;
    int m_y;
};

arr array[100000];

bool compare(arr const &a, arr const &b) {
    if (a.m_y == b.m_y) return a.m_x < b.m_x;
    return a.m_y < b.m_y;
}

int main(void) {
    int i = 0, num = 0, x, y;
    scanf("%d", &num);

    for (i = 0; i < num; i++) {
        scanf("%d %d", &x, &y);
        array[i] = { x,y };
    }

    sort(array, array + num, compare);

    for (i = 0; i < num; i++) {
        printf("%d %d\n", array[i].m_x, array[i].m_y);
    }
}
