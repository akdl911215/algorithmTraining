def solution(N, K):
    total_liter = K
    empty_glasses = N

    glasses = []
    for i in range(1, empty_glasses + 1):
        glasses.append(i)
    glasses.reverse()

    count = 0
    for glass in glasses:
        if total_liter >= glass:
            total_liter -= glass
            count += 1
        if total_liter == 0:
            return count

    return -1

print(solution(5, 8))
# 2

print(solution(4, 10))
# 4

print(solution(1, 2))
# -1

print(solution(10, 5))
# 5