def solution(edges):
    def edge_count(edges):
        edge_obj = {}

        for out_put, in_put in edges:
            if not edge_obj.get(out_put):
                edge_obj[out_put] = [0, 0]
            if not edge_obj.get(in_put):
                edge_obj[in_put] = [0, 0]

            edge_obj[out_put][0] += 1
            edge_obj[in_put][1] += 1

        return edge_obj

    def answer_check(edge_table):
        answer = [0] * 4
        for key, (out_put, in_put) in edge_table.items():

            # 정점 번호
            if out_put >= 2 and in_put == 0:
                answer[0] = key

            # 막대 모양
            elif out_put == 0 and in_put >= 1:
                answer[2] += 1

            # 8자 모양
            elif out_put >= 2 and in_put >= 2:
                answer[3] += 1

        answer[1] = edge_table[answer[0]][0] - answer[2] - answer[3]
        return answer

    edge_table = edge_count(edges)
    answer = answer_check(edge_table)

    return answer

print(solution([[2, 3], [4, 3], [1, 1], [2, 1]]))
# [2, 1, 1, 0]

print(solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]]))
# [4, 0, 1, 2]

# https://school.programmers.co.kr/learn/courses/30/lessons/258711