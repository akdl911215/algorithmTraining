def solution(edges):
    answer = [0] * 4
    # [생성한 정점, 도넛 모양, 막대 모양, 8자 모양]

    edge_list = {}
    # 모든 간선의 진출,진입에 대해 테이블 형태로 체크
    for out_put, in_put in edges:
        if not edge_list.get(out_put):
            edge_list[out_put] = [0, 0]
        if not edge_list.get(in_put):
            edge_list[in_put] = [0, 0]

        edge_list[out_put][0] += 1
        edge_list[in_put][1] += 1

    for key, (out_put, in_put) in edge_list.items():
        # 생성한 정점 찾기
        if out_put >= 2 and in_put == 0:
            answer[0] = key
        # 막대 모양 갯수 찾기
        elif out_put == 0 and in_put >= 1:
            answer[2] += 1
        # 8자 모양 갯수 찾기
        elif out_put >= 2 and in_put >= 2:
            answer[3] += 1

    # 정점의 진출 차수 - 막대 모양 갯수 - 8자 모양 갯수
    answer[1] = edge_list[answer[0]][0] - answer[2] - answer[3]

    return answer

print(solution([[2, 3], [4, 3], [1, 1], [2, 1]]))
# [2, 1, 1, 0]

print(solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]]))
# [4, 0, 1, 2]

# https://school.programmers.co.kr/learn/courses/30/lessons/258711