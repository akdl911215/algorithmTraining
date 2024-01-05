def solution(cards):
    answer = 0

    openBox = []
    for i in range(len(cards)):
        if (i == 0): openBox.append(True)
        else: openBox.append(False)


    table = {}
    tableIndex = 1
    cardIndex = 0
    table[tableIndex] = 1


    while not all(openBox):
        num = cards[cardIndex] - 1
        cardIndex = num

        if (not openBox[num]):
            if tableIndex in table:
                table[tableIndex] = table[tableIndex] + 1
            else:
                table[tableIndex] = 1
        else:
            tableIndex = tableIndex + 1
            for i in range(1, len(openBox)):
                if not openBox[i]:
                    cardIndex = i
                    break

        openBox[num] = True

    arr = []
    for key, value in table.items():
        arr.append([key, value])

    for i in range(len(arr) - 1):
        for j in range(i + 1, len(arr)):
            answer = max(answer, arr[i][1] * arr[j][1])

    return answer


print(solution([8, 6, 3, 7, 2, 5, 1, 4]))
# 12