def dfs(land, x, y, land_oil_id, land_oil_table):
    if x < 0 or x >= len(land) or y < 0 or y >= len(land[0]) or land[x][y] != 1:
        return 0

    land_oil_table[land_oil_id] += 1
    land[x][y] = land_oil_id
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]  # 상하좌우
    for dx, dy in directions:
        dfs(land, x + dx, y + dy, land_oil_id, land_oil_table)

def solution(land):
    answer = 0
    land_oil_table = {}
    land_oil_id = 2

    for y in range(len(land[0])):
        list = set()

        for x in range(len(land)):
            pivot = land[x][y]

            if pivot == 1:
                land_oil_table[land_oil_id] = 0
                dfs(land, x, y, land_oil_id, land_oil_table)
                list.add(land_oil_id)
                land_oil_id += 1
            elif pivot != 0:
                list.add(pivot)

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