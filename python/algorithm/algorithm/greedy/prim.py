import heapq


def prim(graph, start):
    # Step 1: 거리 초기화
    mst = []  # 최소 신장 트리
    visited = set([start])  # 시작 노드를 방문된 노드로 설정
    edges = []  # 우선순위 큐 초기화

    # 시작 노드와 연결된 간선들 모두 큐에 삽입
    for neighbor, edge_weight in graph[start]:
        heapq.heappush(edges, (edge_weight, neighbor))  # (가중치, 이웃 노드) 형태로 큐에 삽입

    total_weight = 0  # 최소 신장 트리의 가중치 합
    mst.append(start)  # 시작 노드를 MST에 추가

    while edges:
        weight, node = heapq.heappop(edges)  # 가중치가 최소인 간선 선택

        if node not in visited:
            total_weight += weight  # 가중치 합 계산
            mst.append(node)  # MST에 노드 추가
            visited.add(node)  # 노드를 방문한 것으로 마킹

            # 선택한 노드와 연결된 간선들을 큐에 추가
            for neighbor, edge_weight in graph[node]:
                if neighbor not in visited:
                    heapq.heappush(edges, (edge_weight, neighbor))  # 이웃 노드와 가중치를 큐에 추가

    return mst, total_weight


# 예시 그래프: {노드: [(이웃, 가중치), ...]}
graph = {
    'A': [('B', 10), ('C', 20)],
    'B': [('A', 10), ('D', 5)],
    'C': [('A', 20), ('D', 1)],
    'D': [('B', 5), ('C', 1)]
}

# 프림 알고리즘 실행
mst, total_weight = prim(graph, 'A')
print("최소 신장 트리:", mst)
print("최소 신장 트리의 가중치 합:", total_weight)