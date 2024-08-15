from itertools import combinations, product

def solution(dice):
    n = len(dice)
    half = n // 2

    best_win_count = -1
    best_dice = None

    # A가 고를 수 있는 모든 조합을 생성합니다.
    for A_indices in combinations(range(n), half):
        B_indices = [i for i in range(n) if i not in A_indices]

        win_count = 0
        draw_count = 0
        lose_count = 0

        # A와 B가 각각 선택한 주사위에 대해 모든 경우의 수를 고려합니다.
        for A_roll in product(*[dice[i] for i in A_indices]):
            for B_roll in product(*[dice[i] for i in B_indices]):
                A_sum = sum(A_roll)
                B_sum = sum(B_roll)
                if A_sum > B_sum:
                    win_count += 1
                elif A_sum == B_sum:
                    draw_count += 1
                else:
                    lose_count += 1

        if win_count > best_win_count:
            best_win_count = win_count
            best_dice = sorted(A_indices)

    # 인덱스를 1부터 시작하는 형태로 변환하여 반환합니다.
    return [i + 1 for i in best_dice]


# 주어진 예시를 테스트합니다.
dice = [
    [1, 2, 3, 4, 5, 6],
    [3, 3, 3, 3, 4, 4],
    [1, 3, 3, 4, 4, 4],
    [1, 1, 4, 4, 5, 5]
]

result = solution(dice)
print(result)  # [1, 4]

# print(solution([[1, 2, 3, 4, 5, 6], [2, 2, 4, 4, 6, 6]]))
# [2]

# print(solution([[40, 41, 42, 43, 44, 45], [43, 43, 42, 42, 41, 41], [1, 1, 80, 80, 80, 80], [70, 70, 1, 1, 70, 70]]))
# [1, 3]

# https://school.programmers.co.kr/learn/courses/30/lessons/258709?language=python3