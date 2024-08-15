def my_combinations(arr, r):
    if r == 0:
        return [[]]
    if len(arr) < r:
        return []
    with_first = [[arr[0]] + rest for rest in my_combinations(arr[1:], r-1)]
    without_first = my_combinations(arr[1:], r)
    return with_first + without_first

def my_product(*args):
    pools = list(map(list, args))
    result = [[]]
    for pool in pools:
        result = [x + [y] for x in result for y in pool]
    for prod in result:
        yield tuple(prod)


# 주사위의 구성
dice = [
    [1, 2, 3, 4, 5, 6],
    [3, 3, 3, 3, 4, 4],
    [1, 3, 3, 4, 4, 4],
    [1, 1, 4, 4, 5, 5]
]

n = len(dice)  # 주사위의 개수
half = n // 2  # A와 B가 가져갈 주사위의 개수

best_win_count = -1  # A가 승리할 수 있는 최적의 승리 횟수를 저장할 변수
best_dice = None  # A가 가져갈 최적의 주사위 조합을 저장할 변수

# A가 선택할 수 있는 모든 주사위 조합을 생성
for A_indices in my_combinations(list(range(n)), half):
    # B가 가져갈 주사위 조합을 생성 (A가 선택한 주사위는 제외)
    B_indices = [i for i in range(n) if i not in A_indices]

    win_count = 0
    draw_count = 0
    lose_count = 0

    # A와 B가 선택한 주사위에 대해 모든 경우의 수를 계산
    for A_roll in my_product(*[dice[i] for i in A_indices]):
        for B_roll in my_product(*[dice[i] for i in B_indices]):
            A_sum = sum(A_roll)  # A의 주사위 합
            B_sum = sum(B_roll)  # B의 주사위 합
            if A_sum > B_sum:
                win_count += 1  # A가 이긴 경우
            elif A_sum == B_sum:
                draw_count += 1  # 무승부인 경우
            else:
                lose_count += 1  # B가 이긴 경우

    # A의 승리 횟수가 가장 큰 경우를 기록
    if win_count > best_win_count:
        best_win_count = win_count
        best_dice = sorted(A_indices)

# 최적의 A의 주사위 조합 출력 (1부터 시작하는 인덱스로 변환)
result = [i + 1 for i in best_dice]
print(result)  # 출력: [1, 4]
