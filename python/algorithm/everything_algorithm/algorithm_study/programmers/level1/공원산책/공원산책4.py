def solution(park, routes):

    start = None
    W = len(park[0])
    H = len(park)
    for i, x in enumerate(park):
        if "S" in x:
            start = [i, x.index("S")]
            break

    X, Y = start
    for i, route in enumerate(routes):
        direction, move = route[:1], int(route[2:])

        if "E" == direction and Y + move < W and "X" not in park[X][Y:Y + move + 1]:
            Y += move
        elif "W" == direction and Y >= move and "X" not in park[X][Y - move:Y]:
            Y -= move
        elif "S" == direction and X + move < H:
            if not "X" in [park[X+i+1][Y] for i in range(move)]:
                X += move
        elif "N" == direction and X - move >= 0:
            if not "X" in [park[X-i-1][Y] for i in range(move)]:
                X -= move

    answer = [X, Y]

    return answer
print(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"]	))
# [2, 1]

# print(solution(["SOO","OXX","OOO"], ["E 2","S 2","W 1"]))
# [0, 1]

# print(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"]))
# [0, 0]