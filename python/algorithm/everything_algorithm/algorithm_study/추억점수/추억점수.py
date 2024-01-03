def solution(name, yearning, photo):
    answer = []

    table = {}
    for i in range(len(name)):
        table[name[i]] = yearning[i]

    print(table)

    for i in range(len(photo)):
        result = 0
        for j in range(len(photo[i])):
            name = photo[i][j]
            if name in table:
                result += table.get(name)

        answer.append(result)

    return answer

print(solution(["may", "kein", "kain", "radi"],[5, 10, 1, 3], [["may"],["kein", "deny", "may"], ["kon", "coni"]]))
# [5, 15, 0]

# https://school.programmers.co.kr/learn/courses/30/lessons/176963