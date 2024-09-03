def solution(numbers):
    result = []

    for number in numbers:
        if number % 2 == 0:
            result.append(number + 1)
        else:
            binary = list(format(number, '08b'))

            for i in range(len(binary) - 2, -1, -1):

                    binary[i] = '1'
                    binary[i + 1] = '0'
                    break
            result.append(int(''.join(binary), 2))

    return result


print(solution([2, 7]))
# [3, 11]

# https://school.programmers.co.kr/learn/courses/30/lessons/77885