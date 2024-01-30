def solution(friends, gifts):
    answer = 0

    table = {friend: {friend2: 0 for friend2 in friends if friend2 != friend} for friend in friends}
    index_table = {friend: 0 for friend in friends}
    given_table = {friend: 0 for friend in friends}
    taken_table = {friend: 0 for friend in friends}


    for value in gifts:
        giver, taken = value.split()
        table[giver][taken] += 1
        given_table[giver] += 1
        taken_table[taken] += 1

    for x in friends:
        for y in friends:
            if x != y:
                # A > B 보다 클 경우 1 증가
                if table[x][y] > 0 and table[y][x] > 0 and table[x][y] > table[y][x]:
                    index_table[x] += 1
                elif (table[x][y] == 0 and table[y][x] == 0) or table[x][y] == table[y][x]:
                    # 선물 지수 = 준 선물 수 - 받은 선물 수
                    x_gift_index = given_table[x] - taken_table[x]
                    y_gift_index = given_table[y] - taken_table[y]

                    # 선물 지수가 더 큰 사람이 선물 받는다
                    if x_gift_index > y_gift_index:
                        index_table[x] += 1
                    elif y_gift_index > x_gift_index:
                        index_table[y] += 1


    for x in index_table:
        if index_table[x] > answer:
            answer = index_table[x]

    return answer

# print(solution(["muzi", "ryan", "frodo", "neo"], ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]))
# 2

print(solution(["joy", "brad", "alessandro", "conan", "david"], ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]))
# 4

# print(solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"]))
# 0

# https://school.programmers.co.kr/learn/courses/30/lessons/258712