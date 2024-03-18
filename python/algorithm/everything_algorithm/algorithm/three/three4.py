from itertools import combinations

def solution(num, k):
    answer = float('inf')

    for el in combinations(range(1, len(num)), k):
        parts = []
        for i, j in zip((0,) + el, el + (len(num),)):
            part = num[i:j]
            parts.append(part)

        expression = "+".join(parts)
        current_sum = eval(expression)
        if current_sum < answer:
            answer = current_sum

    return answer

print(solution("1234567", 2))
# 235