import math


def solution(wallpaper):
    answer = [math.inf, math.inf, -math.inf, -math.inf]

    for x, x_value in enumerate(wallpaper):
        for y, y_value in enumerate(x_value):
            if y_value == '#':
                answer[0] = min(answer[0], x)
                answer[1] = min(answer[1], y)
                answer[2] = max(answer[2], x + 1)
                answer[3] = max(answer[3], y + 1)

    return answer

# .#... (0,0), (0,1), (0,2), (0,3), (0,4)
# #.#.. (1,0), (1,1), (1,2), (1,3), (1,4)
# ...#. (2,0), (2,1), (2,2), (2,3), (2,4)

print(solution([".#...", "..#..", "...#."]))
# [0, 1, 3, 4]

print(solution(["..........", ".....#....", "......##..", "...##.....", "....#....."]))
# [1, 3, 5, 8]

print(solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]))
# [0, 0, 7, 9]

print(solution(["..", "#."]))
# [1, 0, 2, 1]

# https://school.programmers.co.kr/learn/courses/30/lessons/161990