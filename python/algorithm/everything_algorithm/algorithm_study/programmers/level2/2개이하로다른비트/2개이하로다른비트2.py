def solution(numbers):
    result = []

    for num in numbers:
        binary_str = format(num, '08b')
        print('binary_str', binary_str)

        binary_list = list(binary_str)
        print('binary_list', binary_list)

        for i in range(len(binary_list) - 2, -1, -1):
            if binary_list[i] == '0' and binary_list[i + 1] == '1':
                binary_list[i] = '1'
                binary_list[i + 1] = '0'
                break

        print('down binary_list : ', binary_list)
        result.append(''.join(binary_list))
        print('result : ', result)

    return [int(re, 2) for re in result]


print(solution([2, 7]))
# [3, 11]

# https://school.programmers.co.kr/learn/courses/30/lessons/77885