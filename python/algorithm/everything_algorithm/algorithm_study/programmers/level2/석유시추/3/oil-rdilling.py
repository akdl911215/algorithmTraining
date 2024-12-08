from collections import deque

def bfs(land, visit, x, y):
    visit[x][y] = 1
    count = 1
    queue = deque([[x, y]])
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)] # 상하좌우

    min_y = len(land[0]) - 1
    max_y = 0

    while queue:
        queue_x, queue_y = queue.popleft()

        if queue_y < min_y:
            min_y = queue_y

        if queue_y > max_y:
            max_y = queue_y

        for i in range(4):
            dir_x, dir_y = directions[i]
            pivot_x, pivot_y = queue_x + dir_x, queue_y + dir_y
            if len(land) - 1 >= pivot_x >= 0 and len(land[0]) - 1 >= pivot_y >= 0 and land[pivot_x][pivot_y] == 1 and visit[pivot_x][pivot_y] == 0:
                visit[pivot_x][pivot_y] = 1
                queue.append([pivot_x, pivot_y])
                count += 1

    return [count, min_y, max_y]

def solution(land):

    answer = [0 for _ in land[0]]
    visit = [[0 for _ in land[0]] for _ in land]

    for x in range(len(land)):
        for y in range(len(land[0])):
            if land[x][y] == 1 and visit[x][y] == 0:
                count, mix_y, max_y = bfs(land, visit, x, y)
                for i in range(mix_y, max_y + 1):
                    answer[i] += count


    return max(answer)

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

# print(solution([[1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]]))
# 16

# https://school.programmers.co.kr/learn/courses/30/lessons/250136