from collections import defaultdict

def solution(points, routes):
    point_coords = {i + 1: (r, c) for i, (r, c) in enumerate(points)}

    collision_count = 0

    robot_paths = []
    for route in routes:
        path = []

        for i in range(len(route) - 1):
            start = point_coords[route[i]]
            end = point_coords[route[i + 1]]

            if i == 0:
                path.append(start)

            path.extend(calculate_path(start, end))
        robot_paths.append(path)

    active_robots = [0] * len(routes)

    while any(robot_idx < len(robot_paths[i]) for i, robot_idx in enumerate(active_robots)):
        position_count = defaultdict(int)

        for i, robot_idx in enumerate(active_robots):
            if robot_idx < len(robot_paths[i]):
                position = robot_paths[i][robot_idx]
                position_count[position] += 1
                active_robots[i] += 1

        for position, count in position_count.items():
            if count > 1:
                collision_count += 1

    return collision_count

def calculate_path(start, end):
    sr, sc = start
    er, ec = end
    path = []

    while sr != er:
        sr += 1 if sr < er else -1
        path.append((sr, sc))

    while sc != ec:
        sc += 1 if sc < ec else -1
        path.append((sr, sc))

    return path



print(solution([[3, 2], [6, 4], [4, 7], [1, 4]],
               [[4, 2], [1, 3], [2, 4]]))
# 1

# print(solution([[3, 2], [6, 4], [4, 7], [1, 4]], [[4, 2], [1, 3], [4, 2], [4, 3]]))
# 9

# print(solution([[2, 2], [2, 3], [2, 7], [6, 6], [5, 2]],	[[2, 3, 4, 5], [1, 3, 4, 5]]))
# 0

# https://school.programmers.co.kr/learn/courses/30/lessons/340211?language=python3