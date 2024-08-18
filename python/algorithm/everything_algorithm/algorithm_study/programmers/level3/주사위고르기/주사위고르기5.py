from itertools import combinations, product

def solution(dice):

    n = len(dice)
    half_n = n // 2
    best_win_score = -1
    best_dice = None

    for A_indices in combinations(range(n), half_n):
        B_indices = [i for i in range(n) if i not in A_indices]

        win, draw, lose = 0, 0, 0
        for A_roll in product(*[dice[i] for i in A_indices]):
            for B_roll in product(*[dice[i] for i in B_indices]):
                A_sum = sum(A_roll)
                B_sum = sum(B_roll)

            if A_sum > B_sum:
                win += 1
            elif A_sum == B_sum:
                draw += 1
            else:
                lose += 1

        if win > best_win_score:
            best_win_score = win
            best_dice = A_indices


    result = [i + 1 for i in best_dice]
    print(result)

    return result


# 주어진 예시를 테스트합니다.
dice = [
    [1, 2, 3, 4, 5, 6],
    [3, 3, 3, 3, 4, 4],
    [1, 3, 3, 4, 4, 4],
    [1, 1, 4, 4, 5, 5]
]

result = solution(dice)
print(result)  # [1, 4]

print(solution([[1, 2, 3, 4, 5, 6], [2, 2, 4, 4, 6, 6]]))
# [2]

print(solution([[40, 41, 42, 43, 44, 45], [43, 43, 42, 42, 41, 41], [1, 1, 80, 80, 80, 80], [70, 70, 1, 1, 70, 70]]))
# [1, 3]

# https://school.programmers.co.kr/learn/courses/30/lessons/258709?language=python3