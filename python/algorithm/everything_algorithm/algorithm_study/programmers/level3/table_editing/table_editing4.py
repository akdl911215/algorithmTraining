def solution(n, k, cmd):
    answer = ['0'] * n
    current_row = k
    table = {i: [i - 1, i + 1] for i in range(n)}
    table[0][0], table[n - 1][1] = None, None
    deleted_stack = []

    print(table)

    for c in cmd:
        if c.startswith('U'):
            up, X = c.split()
            move = int(X)

            while move > 0:
                move -= 1
                current_row = table[current_row][0]

        elif c.startswith('D'):
            down, X = c.split()
            move = int(X)

            while move > 0:
                move -= 1
                current_row = table[current_row][1]

        elif c.startswith('C'):
            answer[current_row] = 'X'
            prev, next = table[current_row]
            deleted_stack.append([prev, current_row, next])

            if prev == None:
                current_row = table[current_row][1]
                table[current_row][0] = None
            elif next == None:
                current_row = table[current_row][0]
                table[current_row][1] = None
            else:
                current_row = table[current_row][1]
                table_prev = table[prev][1]
                table[prev][1] = table[next][0]
                table[next][0] = table_prev

        else: # Z
            [prev, current, next] = deleted_stack.pop()



    return ''.join(answer)

print(solution(8,2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]))
# "OOOOXOOO"

# print(solution(8,2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]))
# "OOXOXOOO"

# https://school.programmers.co.kr/learn/courses/30/lessons/81303?language=python3
# https://kjhoon0330.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%91%9C-%ED%8E%B8%EC%A7%91-Python