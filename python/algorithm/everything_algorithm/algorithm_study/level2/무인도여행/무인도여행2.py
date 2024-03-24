from collections import deque

def solution(maps):
    answer = []
    visited = []
    for str in maps:
        row = [0] * len(str)
        visited.append(row)

    queue = deque([])
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    sum = 0
    for i in range(len(maps)):
        for j in range(len(maps[i])):
            if maps[i][j] != 'X' and visited[i][j] == 0:
                queue.append([i, j])
                visited[i][j] = 1
                sum += int(maps[i][j])

            while queue:
                x, y = queue.popleft()

                for k in range(4):
                    dx, dy = directions[k]

                    nx, ny = x + dx, y + dy
                    if 0 <= nx < len(maps) and 0 <= ny < len(maps[0]) and visited[nx][ny] == 0 and maps[nx][ny] != 'X':
                        queue.append([nx, ny])
                        visited[nx][ny] = 1
                        sum += int(maps[nx][ny])

            if sum > 0:
                answer.append(sum)
                sum = 0

    if len(answer) == 0:
        return [-1]

    return sorted(answer)

print(solution([
    "X591X",
    "X1X5X",
    "X231X",
    "1XXX1"
]))
# [1, 1, 27]

# print(solution(["XXX","XXX","XXX"]))
# [-1]

# https://school.programmers.co.kr/learn/courses/30/lessons/154540