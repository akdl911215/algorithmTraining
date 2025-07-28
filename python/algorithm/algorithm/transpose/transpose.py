A = [
    [1, 2, 3],
    [4, 5, 6]
]

# zip과 * (unpacking) 연산자를 활용한 전치
A_T = [list(row) for row in zip(*A)]
print(A_T)
# 결과: [[1, 4], [2, 5], [3, 6]]