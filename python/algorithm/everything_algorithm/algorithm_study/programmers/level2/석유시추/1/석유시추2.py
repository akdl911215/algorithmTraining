def dfs(grid, x, y, oil_cluster_id, cluster_sizes):
    if x < 0 or x >= len(grid) or y < 0 or y >= len(grid[0]) or grid[x][y] != 1:
        return 0
    grid[x][y] = oil_cluster_id  # 석유 덩어리에 고유 번호 할당
    cluster_sizes[oil_cluster_id] += 1  # 덩어리 크기 증가
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # 상하좌우
    for dx, dy in directions:
        dfs(grid, x + dx, y + dy, oil_cluster_id, cluster_sizes)
    return cluster_sizes[oil_cluster_id]

def solution(land):
    oil_cluster_id = 2  # 석유 덩어리 고유 번호 시작 (0과 1은 이미 사용 중)
    cluster_sizes = {}  # 덩어리 크기 저장
    # 석유 덩어리 식별 및 크기 계산
    for i in range(len(land)):
        for j in range(len(land[0])):
            land_pivot = land[i][j]
            print("land_pivot : ", land_pivot)
            if land_pivot == 1:
                cluster_sizes[oil_cluster_id] = 0
                dfs(land, i, j, oil_cluster_id, cluster_sizes)
                print("cluster_sizes : ", cluster_sizes)
                oil_cluster_id += 1

    # 각 열별 최대 석유량 계산
    max_oil = 0
    for j in range(len(land[0])):
        oil_per_column = set()  # 중복 제거를 위한 집합
        for i in range(len(land)):
            if land[i][j] > 1:
                oil_per_column.add(land[i][j])
        max_oil = max(max_oil, sum(cluster_sizes[cluster_id] for cluster_id in oil_per_column))

    return max_oil


print(solution(
    [
        [0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 1, 1]
    ]
))
# 9

# print(solution([[1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]]))
# 16

# https://school.programmers.co.kr/learn/courses/30/lessons/250136