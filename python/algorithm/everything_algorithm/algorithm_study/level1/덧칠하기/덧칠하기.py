def solution(n, m, section):
    answer = 0

    arr = [True if i + 1 in section else False for i in range(n)]
    print(arr)

    start = 0

    while any(arr):
        end = 0
        if arr[start]:
            end = start + m > len(n) if len(n) else start + m
            print('end : ', end)
            for i in range(start, end):
                arr[i] = False
                end += 1
                print('arr : ', arr)
        start += 1

    return answer

print(solution(8, 4, [2, 3, 6]))
# 2

# print(solution(5, 4, [1, 3]))
# 1

# print(solution(4, 1 [1, 2, 3, 4]))
# 4

# https://school.programmers.co.kr/learn/courses/30/lessons/161989