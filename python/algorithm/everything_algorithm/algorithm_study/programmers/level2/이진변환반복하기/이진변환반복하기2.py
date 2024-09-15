def solution(s):
    a, b = 0, 0
    while s != '1':
        a += 1
        num = s.count('1')
        b += len(s) - num
        s = bin(num)[2:]

    return [a, b]



print(solution("110010101001"))
# [3,8]

# print(solution("01110"))
# [3,3]

# print(solution("1111111"))
# [4,1]

# https://school.programmers.co.kr/learn/courses/30/lessons/70129