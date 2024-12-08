from collections import deque

def solution(N, K):
    total_liter = K
    empty_glasses = N

    glasses = []
    for i in range(1, empty_glasses + 1):
        glasses.append(i)
    print(glasses)
    queue = deque([[0, 0]])

    visited = set()
    visited.add((0, 0))

    while queue:
        liter, count = queue.popleft()

        if liter == total_liter:
            return count

        for glass in glasses:
            current_liter = liter + glass
            current_count = count + 1

            if current_liter <= total_liter and (current_liter, current_count) not in visited:
                queue.append([current_liter, current_count])
                visited.add((current_liter, current_count))

    return -1




# print(solution(5, 8))
# 2

print(solution(4, 10))
# 4

# print(solution(1, 2))
# -1

# print(solution(10, 5))
# 5