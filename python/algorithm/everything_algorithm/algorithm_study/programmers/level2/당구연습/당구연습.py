def solution(m, n, startX, startY, balls):
    # 반사된 좌표 계산
    # 예를 들어, 오른쪽 벽에 부딪히면 좌표가 (2m−x,y)가 됨

    def get_distance(x1, y1, x2, y2):
        return (x1 - x2) ** 2 + (y1 - y2) ** 2

    results = []

    for ball in balls:
        a, b = ball
        min_dist = float('inf')

        # 반사된 좌표를 계산하여 최소 거리를 구합니다.
        # 각 벽에 대한 반사된 좌표를 계산
        # 상단 벽 반사 (0, n)
        if not (startX == a and startY < b):
            min_dist = min(min_dist, get_distance(startX, startY, a, 2 * n - b))

        # 하단 벽 반사 (0, 0)
        if not (startX == a and startY > b):
            min_dist = min(min_dist, get_distance(startX, startY, a, -b))

        # 좌측 벽 반사 (0, 0)
        if not (startY == b and startX > a):
            min_dist = min(min_dist, get_distance(startX, startY, -a, b))

        # 우측 벽 반사 (m, 0)
        if not (startY == b and startX < a):
            min_dist = min(min_dist, get_distance(startX, startY, 2 * m - a, b))

        results.append(min_dist)

    return results


print(solution(10, 10, 3, 7, [[7, 7], [2, 7], [7, 3]]))
# [52, 37, 116]

# https://school.programmers.co.kr/learn/courses/30/lessons/169198