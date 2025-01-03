from collections import deque


def solution(beginning, target):
    # 행 또는 열을 뒤집는 함수
    def flip(state, index, is_row=True):
        new_state = [row[:] for row in state]
        if is_row:
            # 행 뒤집기
            # flipped_row = []
            # for x in new_state[index]:
            #     flipped_row.append(1 - x)
            row = [1 - x for x in new_state[index]]
            new_state[index] = row
        else:
            # 열 뒤집기
            for row in new_state:
                row2 = 1 - row[index]
                row[index] = row2
        return new_state

    # 두 상태가 같은지 확인하는 함수
    def is_same(state1, state2):
        return state1 == state2

    # BFS로 최소 뒤집기 횟수 찾기
    def bfs(beginning, target):
        queue = deque([(beginning, 0)])  # (현재 상태, 뒤집기 횟수)
        visited = set()  # 방문한 상태를 기록
        visited.add(tuple(map(tuple, beginning)))  # 초기 상태를 방문 기록에 추가

        while queue:
            current_state, flips = queue.popleft()

            # 목표 상태에 도달했으면 뒤집기 횟수 반환
            if is_same(current_state, target):
                return flips

            # 각 행을 뒤집는 경우를 시도
            for i in range(len(current_state)):
                new_state = flip(current_state, i, is_row=True)
                state_tuple = tuple(map(tuple, new_state))
                if state_tuple not in visited:
                    visited.add(state_tuple)
                    queue.append((new_state, flips + 1))

            # 각 열을 뒤집는 경우를 시도
            for i in range(len(current_state[0])):
                new_state = flip(current_state, i, is_row=False)
                state_tuple = tuple(map(tuple, new_state))
                if state_tuple not in visited:
                    visited.add(state_tuple)
                    queue.append((new_state, flips + 1))

        # 목표 상태에 도달할 수 없으면 -1 반환
        return -1

    # BFS를 시작하여 최소 뒤집기 횟수 찾기
    return bfs(beginning, target)


print(solution([[0, 1, 0, 0, 0], [1, 0, 1, 0, 1], [0, 1, 1, 1, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]],
               [[0, 0, 0, 1, 1], [0, 0, 0, 0, 1], [0, 0, 1, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]))
# 5

print(solution([[0, 0, 0], [0, 0, 0], [0, 0, 0]],
                  [[1, 0, 1], [0, 0, 0], [0, 0, 0]]))
# -1