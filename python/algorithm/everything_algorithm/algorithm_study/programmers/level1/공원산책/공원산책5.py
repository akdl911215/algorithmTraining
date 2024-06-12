def solution(park, routes):
    width = len(park[0])
    height = len(park)

    start = None
    for i, x in enumerate(park):
        if "S" in x:
            start = [i, x.index("S")]
            break

    x, y = start

    for route in routes:
        direction, distance = route.split()
        distance = int(distance)

        if direction == "E" and y + distance < width and "X" not in park[x][y:y + distance + 1]:
            y += distance
        elif direction == "W" and y - distance >= 0 and "X" not in park[x][y - distance:y]:
            y -= distance
        elif direction == "S" and x + distance < height:
            if not "X" in [park[x + i + 1][y] for i in range(distance)]:
                x += distance
        elif direction == "N" and x - distance >= 0:
            if not "X" in [park[x - i - 1][y] for i in range(distance)]:
                x -= distance

    return [x, y]



print(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"]	))
# [2, 1]

print(solution(["SOO","OXX","OOO"], ["E 2","S 2","W 1"]))
# [0, 1]

print(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"]))
# [0, 0]

# https://school.programmers.co.kr/learn/courses/30/lessons/172928#