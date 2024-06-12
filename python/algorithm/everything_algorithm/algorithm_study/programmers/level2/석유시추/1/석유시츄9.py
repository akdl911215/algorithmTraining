from collections import deque


def bfs(land, visit, start):
    height = len(land)
    width = len(land[0])
    moveX = [0, 0, 1, -1]
    moveY = [1, -1, 0, 0]
    count = 1
    queue = deque([[*start]])
    minX = width - 1
    maxX = 0
    visit[start[1]][start[0]] = 1

    while queue:
        crtX, crtY = queue.popleft()

        if minX > crtX:
            minX = crtX
        elif maxX < crtX:
            maxX = crtX

        for i in range(4):
            nextX = crtX + moveX[i]
            nextY = crtY + moveY[i]

            if nextX >= 0 and nextX < width and nextY >= 0 and nextY < height and land[nextY][nextX] == 1 and visit[nextY][nextX] == 0:
                visit[nextY][nextX] = 1
                count += 1
                queue.append([nextX, nextY])

    return (count, minX, maxX)


def solution(land):
    answer = 0
    height = len(land)
    width = len(land[0])
    visit = [[0 for _ in range(width)] for _ in range(height)]
    result = [0 for _ in range(width)]

    for row_index, row in enumerate(land):
        for col_index, col in enumerate(row):
            if col == 1 and visit[row_index][col_index] == 0:
                size, minX, maxX = bfs(land, visit, (col_index, row_index))

                for i in range(minX, maxX + 1):
                    result[i] += size

    answer = max(result)
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