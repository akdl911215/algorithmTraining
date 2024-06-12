def solution(n, m, section):

    answer = 0

    left, right = section[0] - 1, section[0] - 1 + m - 1

    arr = [True if i + 1 in section else False for i in range(n)]

    while any(arr):
        for i in range(left, right + 1):
            if arr[i]:
                arr[i] = False
        left += 1
        right += 1
        answer += 1



    return answer

# print(solution(8, 4, [2, 3, 6]))
# 2

print(solution(5, 4, [1, 3]))
# 1

print(solution(4, 1 [1, 2, 3, 4]))
# 4

# https://school.programmers.co.kr/learn/courses/30/lessons/161989