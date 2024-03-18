def solution(num, k):
    answer = 0

    for i in range(1, len(num)):
        for j in range(i + 1, len(num)):
            first = num[:i]
            second = num[i:j]
            third = num[j:]
            total_sum = int(first) + int(second) + int(third)

            if answer is total_sum < answer:
                answer = total_sum


    return answer

print(solution("1234567", 2))
# 235