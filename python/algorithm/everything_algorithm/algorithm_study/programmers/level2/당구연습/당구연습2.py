
#
def get_distance(x1, y1, x2, y2):
    return (x1 - x2) ** 2 + (y1 - y2) ** 2

def solution(m, n, startX, startY, balls):
    answer = []

    for [x, y] in balls:
        min_distance = float('int')

        if m == 0 and n >= y:
            distance = get_distance(startX, startY, x, y)
            if distance < min_distance:
                min_distance = distance



    return answer


print(solution(10, 10, 3, 7, [[7, 7], [2, 7], [7, 3]]))
# [52, 37, 116]

# https://school.programmers.co.kr/learn/courses/30/lessons/169198