def solution(park, routes):
    width = len(park[0])
    height = len(park)
    answer = []

    start = None
    for i, x in enumerate(park):
        if "S" in x:
            start = [i, x.index("S")]
            break

    x, y = start


    two_dimensional_park = []
    for park_str in park:
        arr = []
        for str in park_str:
            arr.append(str)
        two_dimensional_park.append(arr)
    print('two_dimensional_park : ', two_dimensional_park)

    def obstacle_check(x, y, dx, dy, park):
        # 이동 경로상에 장애물이 있는지 검사
        if dy < 0:
            for i in range(y, y - dy, -1):
                if park[x][i] == 'X':
                    return False

        if dy >= 0:
            for i in range(y, y + dy, 1):
                if park[x][i] == 'X':
                    return False

        if dx < 0:
            for i in range(x, x - dx, -1):
                if park[i][y] == 'X':
                    return False

        if dx >= 0:
            for i in range(x, x + dx, 1):
                if park[i][y] == 'X':
                    return False

        return True


    # N: 북, S: 남, W: 서, E: 동
    def is_within_bounds(x, y, H, W):
        return 0 <= x < H and 0 <= y < W

    def mov_robot(commands, x, y):

        direction_map = {
            "E": (0, 1),   # East
            "W": (0, -1),  # West
            "S": (1, 0),   # South
            "N": (-1, 0),  # North
        }

        for command in commands:
            direction, distance = command.split()
            distance = int(distance)

            if direction == "N":
                new_x, new_y = x - distance, y
            elif direction == "E":
                new_x, new_y = x, y + distance
            elif direction == "S":
                new_x, new_y = x + distance, y
            elif direction == "W":
                new_x, new_y = x, y - distance

            dx, dy = direction_map[direction]

            if is_within_bounds(new_x, new_y, height, width) and obstacle_check(x, y, dx * distance, dy * distance, two_dimensional_park):
                x, y = new_x, new_y
            else:
                continue

        answer.append(x)
        answer.append(y)

    mov_robot(routes, x, y)

    return answer



print(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"]	))
# [2, 1]

print(solution(["SOO","OXX","OOO"], ["E 2","S 2","W 1"]))
# [0, 1]

print(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"]))
# [0, 0]