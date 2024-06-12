def solution(scores):
    answer = 0

    wanho_left, wanho_right = scores[0][0], scores[0][1]
    wanho_score = wanho_left + wanho_right

    s_scores = sorted(scores, key=lambda x: (-x[0], x[1]))

    max_r = 0
    for l, r in s_scores:
        if wanho_left < l and wanho_right < r:
            return -1

        if r >= max_r:
            max_r = r
            if l + r > wanho_score:
                answer += 1

    return answer + 1

print(solution([[2,2],[1,4],[3,2],[3,2],[2,1]]))
# 4

# https://school.programmers.co.kr/learn/courses/30/lessons/152995