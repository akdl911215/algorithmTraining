from collections import defaultdict


def solution(points, routes):
    # Step 1: Map point indices to their coordinates
    point_coords = {i + 1: (r, c) for i, (r, c) in enumerate(points)}

    # Step 2: Initialize collision counter
    collision_count = 0

    # Step 3: Track robot movements
    robot_paths = []
    for route in routes:
        path = []
        for i in range(len(route) - 1):
            start = point_coords[route[i]]
            end = point_coords[route[i + 1]]
            path.extend(calculate_path(start, end))
        robot_paths.append(path)

    # Step 4: Simulate robot movements over time
    active_robots = [0] * len(routes)  # Tracks how far each robot has traveled in its path

    while any(robot_idx < len(robot_paths[i]) for i, robot_idx in enumerate(active_robots)):
        position_count = defaultdict(int)

        for i, robot_idx in enumerate(active_robots):
            if robot_idx < len(robot_paths[i]):  # Robot still has steps to move
                position = robot_paths[i][robot_idx]
                position_count[position] += 1
                active_robots[i] += 1  # Move robot to the next step

        # Correct Collision Counting
        for position, count in position_count.items():
            if count > 1:  # More than one robot in the same position
                collision_count += count * (count - 1) // 2  # Count unique pairs

    return collision_count


def calculate_path(start, end):
    """Calculate the Manhattan path from start to end with row priority."""
    sr, sc = start
    er, ec = end
    path = []

    # Move along rows first
    while sr != er:
        sr += 1 if sr < er else -1
        path.append((sr, sc))

    # Move along columns
    while sc != ec:
        sc += 1 if sc < ec else -1
        path.append((sr, sc))

    return path


print(solution([[3, 2], [6, 4], [4, 7], [1, 4]],
               [[4, 2], [1, 3], [2, 4]]	))
# 1

print(solution([[3, 2], [6, 4], [4, 7], [1, 4]],[[4, 2], [1, 3], [4, 2], [4, 3]]))
# 9

print(solution([[2, 2], [2, 3], [2, 7], [6, 6], [5, 2]],	[[2, 3, 4, 5], [1, 3, 4, 5]]))
# 0

# https://school.programmers.co.kr/learn/courses/30/lessons/340211?language=python3