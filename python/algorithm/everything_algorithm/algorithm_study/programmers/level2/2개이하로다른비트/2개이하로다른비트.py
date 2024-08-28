def print_binary(n):
    return format(n, '08b')  # 8자리의 이진수 형식으로 변환

def solution(numbers):
    binary_list = [print_binary(num) for num in numbers]
    print('up : ', binary_list)

    for i in range(len(binary_list)):
        binary_str = list(binary_list[i])

        for j in range(len(binary_str) - 1, -1, -1):
            if binary_str[j] == '0':
                binary_str[j] = '1'
                break

        binary_list[i] = ''.join(binary_str)
    print(binary_list)

    return [int(binary, 2) for binary in binary_list]


print(solution([2, 7]))
# [3, 11]

# https://school.programmers.co.kr/learn/courses/30/lessons/77885