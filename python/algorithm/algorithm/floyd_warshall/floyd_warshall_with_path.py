INF = float('inf')

def floyd_warshall_with_path(W):
    n = len(W)
    # 깊은 복사
    dist = [row[:] for row in W]
    nxt = [[None]*n for _ in range(n)]

    # 초기 next 설정: 간선이 있으면 첫 hop은 목적지 j
    for i in range(n):
        for j in range(n):
            if i != j and W[i][j] != INF:
                nxt[i][j] = j

    # 핵심 DP (k를 중간 정점으로 허용)
    for k in range(n):
        for i in range(n):
            if dist[i][k] == INF:
                continue
            for j in range(n):
                alt = dist[i][k] + dist[k][j]
                if alt < dist[i][j]:
                    dist[i][j] = alt
                    nxt[i][j] = nxt[i][k]

    # 음수 사이클 판정: dist[v][v] < 0
    neg_cycle_nodes = [v for v in range(n) if dist[v][v] < 0]
    return dist, nxt, neg_cycle_nodes

def reconstruct_path(u, v, nxt):
    """
    최단 경로 복원(정점 인덱스: 0-based). 경로 없으면 [] 반환.
    """
    if nxt[u][v] is None:
        return []
    path = [u]
    while u != v:
        u = nxt[u][v]
        path.append(u)
        if len(path) > len(nxt) + 5:  # 안전장치
            break
    return path

def print_matrix(M, title=""):
    if title:
        print(title)
    n = len(M)
    # 헤더
    header = ["   "] + [f"{j+1:>6}" for j in range(n)]
    print("".join(header))
    for i in range(n):
        row = [f"{i+1:>3}"]
        for j in range(n):
            val = M[i][j]
            if isinstance(val, float) and val == INF:
                row.append(f"{'∞':>6}")
            else:
                row.append(f"{val:>6}")
        print("".join(row))
    print()

def main():
    n = 4
    W = [[INF] * n for _ in range(n)]
    for i in range(n):
        W[i][i] = 0.0

    edges = [
        (0, 1, 3.0),   # 1->2:3
        (0, 3, 10.0),  # 1->4:10
        (1, 2, 1.0),   # 2->3:1
        (2, 0, 2.0),   # 3->1:2
        (2, 3, 2.0),   # 3->4:2
        (3, 2, 3.0),   # 4->3:3
    ]
    for a, b, w in edges:
        W[a][b] = w

    # 최단거리 계산
    dist, nxt, neg_nodes = floyd_warshall_with_path(W)

    # 결과 출력
    print_matrix(W, "초기 인접 행렬 W (가중치):")
    print_matrix(dist, "모든 쌍 최단거리 행렬 D:")

    # next-hop 행렬(사람이 보기 쉽게 1-based로 표시)
    next_hop_view = [[None if nxt[i][j] is None else (nxt[i][j] + 1) for j in range(n)] for i in range(n)]
    print_matrix(next_hop_view, "Next-hop 행렬(최단 경로에서 첫 번째로 가야 할 정점):")

    # 경로 복원 예시: 1 -> 4
    path_1_to_4 = reconstruct_path(0, 3, nxt)
    human_path = [p + 1 for p in path_1_to_4]
    print(f"Shortest path 1→4: {' → '.join(map(str, human_path))}")
    print(f"Distance(1→4): {dist[0][3]}")

    # 음수 사이클 노드(있다면 1-based로 표시)
    if neg_nodes:
        print("음수 사이클 탐지 노드(1-based):", [v + 1 for v in neg_nodes])
    else:
        print("음수 사이클 없음")


if __name__ == "__main__":
    main()