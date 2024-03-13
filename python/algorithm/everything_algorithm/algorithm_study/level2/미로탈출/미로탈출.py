def solution(maps):
    answer = 0

    N = len(maps)
    M = len(maps[0])

    check_coordinates_list = [[float('inf') for _ in range(M)] for _ in range(N)]

    return answer

# S : 시작 지점
# E : 출구
# L : 레버
# O : 통로
# X : 벽
print(solution([
    "SOOOL",
    "XXXXO",
    "OOOOO",
    "OXXXX",
    "OOOOE"
              ]))
# 16

# print(solution(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"))
# -1

# https://school.programmers.co.kr/learn/courses/30/lessons/159993