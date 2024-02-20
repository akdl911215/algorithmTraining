from collections import deque

def bfs(land, x, y, land_oil_id, land_oil_table):

    land_oil_table[land_oil_id] += 1
    land[x][y] = land_oil_id
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]  # 상하좌우
    # for dx, dy in directions:

#
    visited = []
    queue = deque([])
    for j in range(len(land[0])):
        for x in range(len(land)):
            print()


def solution(land):
    answer = 0
    land_oil_table = {}
    land_oil_id = 2
    visit = [[0 for row in land[row]] for row in land]
    print('visit : ', visit)

    for y in range(len(land[0])):
        list = set()

        for x in range(len(land)):
            pivot = land[x][y]

            if pivot == 1:
                bfs(land, x, y, land_oil_id, land_oil_table)

        num = sum([land_oil_table[el] for el in list])
        answer = num if num > answer else answer

    return answer

print(solution(
    [
        [0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 1, 1]
    ]
))
# 9

print(solution([[1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]]))
# 16

# https://school.programmers.co.kr/learn/courses/30/lessons/250136