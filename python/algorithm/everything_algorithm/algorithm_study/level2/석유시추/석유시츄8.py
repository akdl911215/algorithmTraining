from collections import deque

def bfs(land, visit, x, y):

    visit[x][y] = 1
    count = 1
    queue = deque([[x, y]])
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]  # 상하좌우

    min_x = len(land[0]) - 1
    max_x = 0

    while queue:
        print('queue : ', queue)
        queue_x, queue_y = queue.popleft()

        if queue_x < min_x:
            min_x = queue_x
        elif queue_x > max_x:
            max_x = queue_x

        for i in range(4):
            dir_x, dir_y = directions[i]
            if queue_x + dir_x >= 0 and queue_x + dir_x <= len(land) - 1 and queue_y + dir_y >= 0 and queue_y + dir_y <= len(land[0]) and land[x + dir_x][y + dir_y] == 1 and visit[x + dir_x][y + dir_y] == 0:
                visit[queue_x + dir_x][queue_y + dir_y] = 1
                queue.append([queue_x + dir_x, queue_y + dir_y])
                count += 1

    return [count, min_x, max_x]


def solution(land):
    answer = [0 for _ in land[0]]
    visit = [[0 for _ in land[0]] for _ in land]
    print('visit : ', visit)

    for y in range(len(land[0])):
        for x in range(len(land)):
            if land[x][y] == 1 and visit[x][y] == 0:
                count, mix_x, max_x = bfs(land, visit, x, y)
                for i in range(mix_x, max_x):
                    answer[i] += count

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