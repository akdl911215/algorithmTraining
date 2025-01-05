def solution(n, k, cmd):
    # 초기 상태 설정
    state = ['O'] * n  # 'O'로 모든 행을 초기화
    current_row = k  # 현재 선택된 행
    last_deleted = []  # 삭제된 행들을 추적하는 스택

    # 명령 처리
    for command in cmd:
        if command.startswith('U'):
            # "U X" : 위로 X만큼 이동
            _, X = command.split()
            X = int(X)
            # X만큼 현재 행을 위로 이동
            while X > 0:
                current_row -= 1
                if state[current_row] == 'O':
                    X -= 1

        elif command.startswith('D'):
            # "D X" : 아래로 X만큼 이동
            _, X = command.split()
            X = int(X)
            # X만큼 현재 행을 아래로 이동
            while X > 0:
                current_row += 1
                if state[current_row] == 'O':
                    X -= 1

        elif command == 'C':
            # "C" : 현재 행을 삭제
            state[current_row] = 'X'
            last_deleted.append(current_row)
            # 삭제 후 다음 선택된 행 결정
            if current_row == n - 1:  # 마지막 행일 경우 위로 이동
                while state[current_row] == 'X':
                    current_row -= 1
            else:
                while state[current_row] == 'X':
                    current_row += 1

        elif command == 'Z':
            # "Z" : 마지막 삭제된 행 복구
            restored_row = last_deleted.pop()
            state[restored_row] = 'O'
            # 복구 후 선택된 행 결정
            if restored_row < current_row:
                current_row = restored_row

    return ''.join(state)  # 상태를 문자열로 결합하여 반환


print(solution(8,2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]))
# "OOOOXOOO"

print(solution(8,2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]))
# "OOXOXOOO"