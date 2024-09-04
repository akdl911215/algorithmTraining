def solution(s):
    zero_remove_count = 0
    count = 0

    while s != '1':

        st = ''
        for number in s:
            if number == '1':
                st += '1'
            else:
                zero_remove_count += 1

        count += 1
        decimal = len(st)
        s = bin(decimal)[2:]

    return [count, zero_remove_count]

print(solution("110010101001"))
# [3,8]

print(solution("01110"))
# [3,3]

print(solution("1111111"))
# [4,1]

# https://school.programmers.co.kr/learn/courses/30/lessons/70129