def knapsack(weights, values, capacity):
    # 물품의 수
    n = len(weights)

    # 각 물품의 단위 가치 계산 (가치/무게)
    ratio = [(values[i] / weights[i], weights[i], values[i]) for i in range(n)]

    # 단위 가치가 높은 순으로 정렬
    ratio.sort(reverse=True, key=lambda x: x[0])

    total_value = 0  # 총 가치
    remaining_capacity = capacity  # 남은 용량

    for r, weight, value in ratio:
        if remaining_capacity >= weight:
            # 배낭에 물품을 전부 담을 수 있으면
            remaining_capacity -= weight
            total_value += value
        else:
            # 물품을 일부 담을 수 있으면
            total_value += value * (remaining_capacity / weight)
            break

    return total_value


# 물품의 무게와 가치
weights = [10, 20, 30, 40]
values = [60, 100, 120, 240]

# 배낭의 용량
capacity = 50

# 알고리즘 실행
max_value = knapsack(weights, values, capacity)
print("최대 가치:", max_value)
