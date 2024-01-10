def solution(park, routes):
    answer = []
    width = len(park[0])
    height = len(park)
    x = 0
    y = park[0].find("S")

    obstacle_coordinates = []
    for i in range(len(park)):
        j = 0
        for s in park[i]:
            if 'X' in s:
                obstacle_coordinates.append(i + j)
            j += 1

    def obstacle_check(x, y, new_x, new_y):
        sum_x_y = x + y
        new_sum_x_y = new_x + new_y

        for i in obstacle_coordinates:
            if sum_x_y < i < new_sum_x_y:
                return False

        return True


    # N: 북, S: 남, W: 서, E: 동
    def is_within_bounds(x, y, H, W):
        return 0 <= x < H and 0 <= y < W if True else False

    def mov_robot(commands, x, y):

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

            if is_within_bounds(new_x, new_y, height, width) and obstacle_check(x, y, new_x, new_y):
                x, y = new_x, new_y
            else:
                continue

        return [x, y]


    return mov_robot(routes, x, y)

print(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"]	))
# [2, 1]

print(solution(["SOO","OXX","OOO"], ["E 2","S 2","W 1"]))
# [0, 1]

print(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"]))
# [0, 0]