def dfs(b, i, depth):
    if depth == 0:  # 리프 노드에 도달했다면
        return True  # 포화이진트리

    # 부모노드가 '0' 일때
    # 왼쪽 자식 노드가 '1' 이거나 오른쪽 자식 노드가 '1' 이라면 포화 이진트리가 될 수 없음
    elif b[i] == '0':
        if b[i - depth] == '1' or b[i + depth] == '1': return False

    # 왼쪽 서브 트리 탐색
    left = dfs(b, i - depth, depth // 2)
    # 오른쪽 서브 트리 탐색
    right = dfs(b, i + depth, depth // 2)
    return left and right


def solution(numbers):
    answer = []
    for num in numbers:
        b = bin(num)[2:]

        len_b = len(b)
        bin_len_b = bin(len_b + 1)
        nodes = bin_len_b[2:]


        if '1' in nodes[1:]:
            len_nodes = len(nodes)
            na = (1 << len_nodes)
            nb = int(nodes, 2)
            dummies = na - nb
            b = '0' * dummies + b


        result = dfs(b, len(b) // 2, (len(b) + 1) // 4)
        answer.append(1 if result else 0)

    return answer

print(solution([7, 42, 5]))
# [1, 1, 0]

# print(solution([63, 111, 95]))
# [1, 1, 0]