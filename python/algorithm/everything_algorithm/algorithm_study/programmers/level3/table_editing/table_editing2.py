def solution(n, k, cmd):
    table = ['O'] * n
    deleted_stack = []
    current_row = k

    for command in cmd:
        if command.startswith('U'):
            up, m = command.split()
            move = int(m)

            while move > 0:
                current_row -= 1

                if table[current_row] == 'O':
                    move -= 1

        elif command.startswith('D'):
            down, m = command.split()
            move = int(m)

            while move > 0:
                current_row += 1

                if table[current_row] == 'O':
                    move -= 1

        elif command.startswith('C'):
            deleted_stack.append(current_row)
            table[current_row] = 'X'

            if current_row == n - 1:
                current_row -= 1
            else:
                current_row += 1

        elif command .startswith('Z'):
            last_row_index = deleted_stack.pop()
            table[last_row_index] = 'O'

    return ''.join(table)

print(solution(8,2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]))
# "OOOOXOOO"

print(solution(8,2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]))
# "OOXOXOOO"

# https://school.programmers.co.kr/learn/courses/30/lessons/81303?language=python3