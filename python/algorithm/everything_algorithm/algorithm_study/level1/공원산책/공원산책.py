def solution(park, routes):
    answer = []
    width = len(park[0])
    print('width : ', width)
    height = len(park)
    print('height : ', height)

    # N: 북, S: 남, W: 서, E: 동
    def check():
        print()


    def mov_robot(commands, x, y):

        for command in commands:
            direction, distance = command.split()
            distance = int(distance)


    return answer

print(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"]	))
# [2, 1]

# print(solution(["SOO","OXX","OOO"], ["E 2","S 2","W 1"]))
# [0, 1]

# print(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"]))
# [0, 0]