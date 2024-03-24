def solution(maps):
    answer = []

    visited = []
    for str in maps:
        row = [0] * len(str)
        visited.append(row)
    print(visited)

    for i in range(len(maps)):
        for j in range(len(maps[i])):
            if maps[i][j] != 'X' and visited[i][j] == 0:
                visited[i][j] == 1
                print(i, j)

    return answer

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