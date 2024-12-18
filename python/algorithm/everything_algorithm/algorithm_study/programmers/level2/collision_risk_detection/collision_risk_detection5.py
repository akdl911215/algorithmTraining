from collections import defaultdict

def solution(points, routes):

    # 각 포인트 위치 지정
    point_coords = {(i + 1): (r, c) for i, (r, c) in enumerate(points)}

    # 모든 로봇의 path 를 모으기 위한 배열. 2중 배열 형태
    robots_path = []
    for route in routes:
        start = point_coords[route[0]]
        end = point_coords[route[1]]

        path = []
        for i in range(len(route) - 1):

            if i == 0:
                path.append(start)

            result_path = calculate_path(start, end)
            # 로봇의 이동 경로가 담긴 path 를 기존의 path 배열에 확장
            path.extend(result_path)

        # 확장된 path 값을 robots_path 에 삽입
        robots_path.append(path)

    # 현재 로봇 위치들을 시작지점으로 초기화
    active_position = [0] * len(robots_path)

    # 총 충돌 횟수를 저장
    robots_collision = 0

    # 로봇의 위치와 robots_path의 길이를 비교해서 하나의 로봇이라도 도착하지 않으면 실행
    while any(robot_idx < len(robots_path[i]) for i, robot_idx in enumerate(active_position)):
        # 로봇의 각 위치를 체크
        collision_count = defaultdict(int)

        # 포문을 돌면서 각 위치를 한칸씩 옮긴다.
        for i, robot_idx in enumerate(active_position):
            if robot_idx < len(robots_path[i]):
                position = robots_path[i][robot_idx]
                collision_count[position] += 1
                active_position[i] += 1

        # 위치를 한칸씩 옮긴 후 count 값이 2 이상이라면 충돌한것이니 + 1 값을 해준다.
        for position, count in collision_count.items():
            if count > 1:
                robots_collision += 1

    return robots_collision

def calculate_path(start, end):
    start_row, start_column = start
    end_row, end_column = end

    path = []
    # start_row 를 end_row 까지 위치를 path 배열에 저장
    while start_row != end_row:
        start_row += 1 if start_row < end_row else -1
        path.append((start_row, start_column))

    # start_column 를 end_column 까지 위치를 path 배열에 저장
    while start_column != end_column:
        start_column += 1 if start_column < end_column else -1
        path.append((start_row, start_column))

    return path




print(solution([[3, 2], [6, 4], [4, 7], [1, 4]],
               [[4, 2], [1, 3], [2, 4]]))
# 1

print(solution([[3, 2], [6, 4], [4, 7], [1, 4]], [[4, 2], [1, 3], [4, 2], [4, 3]]))
# 9

print(solution([[2, 2], [2, 3], [2, 7], [6, 6], [5, 2]],	[[2, 3, 4, 5], [1, 3, 4, 5]]))
# 0

# https://school.programmers.co.kr/learn/courses/30/lessons/340211?language=python3