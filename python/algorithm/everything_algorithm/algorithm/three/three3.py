from itertools import combinations

def solution(num, k):
    answer = float('inf')


    # for i in range(1, len(num)):
    #     for j in range(i + 1, len(num)):
    #         first = num[:i]
    #         second = num[i:j]
    #         third = num[j:]
    #         total_sum = int(first) + int(second) + int(third)

        # if answer is total_sum < answer:
        #     answer = total_sum
    for el in combinations(range(1, len(num)), k):
        parts = [num[i:j] for i, j in zip((0,) + el, el + (len(num),))]
        expression = "+".join(parts)
        current_sum = eval(expression)
        if current_sum < answer:
            answer = current_sum

    return answer

print(solution("1234567", 2))
# 235