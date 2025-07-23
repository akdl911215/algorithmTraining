n = 5
parent = [i for i in range(n)]

def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x]) # 경로 압축
    return parent[x]

def union(x,y):
    root_x = find(x)
    root_y = find(y)

    if root_x != root_y:
        parent[root_y] = root_x # root_y 집합을 root_x에 합침

# 사용 예시
union(0, 1)
union(2, 3)
print(find(0) == find(1))  # True (같은 집합)
print(find(1) == find(2))  # False (다른 집합)
union(1, 2)
print(find(0) == find(3))  # True (합쳐졌으므로 같은 집합)