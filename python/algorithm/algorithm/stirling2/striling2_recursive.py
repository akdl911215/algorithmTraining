def stirling2_recursive(n, k):
    if n == 0 and k == 0:
        return 1
    if n == 0 or k == 0 or k > n:
        return 0

    a = k * stirling2_recursive(n-1, k)
    b = stirling2_recursive(n - 1, k - 1)
    return a + b

# 예시: 4명을 2개 그룹으로 나누는 방법
print(stirling2_recursive(4, 2))  # 결과: 7
