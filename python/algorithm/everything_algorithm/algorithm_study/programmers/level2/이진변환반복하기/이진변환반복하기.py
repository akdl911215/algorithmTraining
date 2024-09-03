def solution(s):
    count = 0

    while s != '1':

        st = ''
        for number in s:
            if number == '1':
                st += '1'
            else:
                count += 1

        decimal = len(st)
        s = bin(decimal)[2:]

    return [s, count]

print(solution("110010101001"))
# [3,8]

# print(solution("01110"))
# [3,3]

# print(solution("1111111"))
# [4,1]

# https://school.programmers.co.kr/learn/courses/30/lessons/70129