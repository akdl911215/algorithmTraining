from collections import defaultdict

def solution(points, routes):

    # 각 포인트 위치 지정
    point_coords = {(i + 1): (r, c) for i, (r, c) in enumerate(points)}
    print(point_coords)

    robots_path = []
    for route in routes:
        print('route : ', route)
        start = point_coords[route[0]]
        print('start : ', start)
        end = point_coords[route[1]]
        print('end : ', end)

        path = []
        for i in range(len(route) - 1):
            if i == 0:
                path.append(start)

            result_path = calculate_path(start, end)
            print('result_path : ', result_path)
            path.extend(result_path)
            print('path : ', path)
        robots_path.append(path)

    robots_position = [0] * len(robots_path)
    collision_check = defaultdict(int)

    # while any(i < )

    for i in range(len(robots_path)):
        for j, position in enumerate(robots_path[i]):
            collision_check[position] += 1
            robots_position[j] += 1

    return 0

def calculate_path(start, end):
    start_row, start_column = start
    end_row, end_column = end

    path = []
    while start_row != end_row:
        start_row += 1 if start_row < end_row else -1
        path.append((start_row, start_column))

    while start_column != end_column:
        start_column += 1 if start_column < end_column else -1
        path.append((start_row, start_column))

    return path




print(solution([[3, 2], [6, 4], [4, 7], [1, 4]],
               [[4, 2], [1, 3], [2, 4]]))
# 1

# print(solution([[3, 2], [6, 4], [4, 7], [1, 4]], [[4, 2], [1, 3], [4, 2], [4, 3]]))
# 9

# print(solution([[2, 2], [2, 3], [2, 7], [6, 6], [5, 2]],	[[2, 3, 4, 5], [1, 3, 4, 5]]))
# 0

# https://school.programmers.co.kr/learn/courses/30/lessons/340211?language=python3