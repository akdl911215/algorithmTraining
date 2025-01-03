def solution(beginning, target):
    answer = 0

    num_columns = len(beginning[0])
    num_rows = len(beginning)


    for col in range(num_columns):
        for row in range(num_rows):
            if beginning[row][col] != target[row][col]:
                answer += 1
                for col2 in range(num_columns):
                    beginning[row][col2] = 0 if beginning[row][col2] == 1 else 1

    for row in range(num_rows):
        for col in range(num_columns):
            if beginning[row][col] != target[row][col]:
                answer += 1
                for row2 in range(num_rows):
                    beginning[row2][col] = 0 if beginning[row2][col] == 1 else 1

    for row in range(num_rows):
        for col in range(num_columns):
            if beginning[row][col] != target[row][col]:
                return -1

    return answer

print(solution([[0, 1, 0, 0, 0], [1, 0, 1, 0, 1], [0, 1, 1, 1, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]],
               [[0, 0, 0, 1, 1], [0, 0, 0, 0, 1], [0, 0, 1, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]))
# 5

# print(solution([[0, 0, 0], [0, 0, 0], [0, 0, 0]],
#                   [[1, 0, 1], [0, 0, 0], [0, 0, 0]]))
# -1