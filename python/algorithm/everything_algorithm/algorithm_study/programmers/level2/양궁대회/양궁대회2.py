def solution(n, info):
    def backtrack(ryan, score_ryan, score_apeach, arrow, index):
        if index == 11 or arrow == 0:
            if score_ryan > score_apeach:
                diff = score_ryan - score_apeach
                nonlocal max_diff
                nonlocal answer
                if diff > max_diff:
                    max_diff = diff
                    answer = ryan[:]
                elif diff == max_diff:
                    for i in range(10, -1, -1):
                        if answer[i] > ryan[i]:
                            break
                        elif ryan[i] > answer[i]:
                            answer = ryan[:]
                            break
            return

        # Case 1: Try to get the score on current index
        if arrow > info[index]:
            ryan[index] = info[index] + 1
            backtrack(ryan, score_ryan + 10 - index, score_apeach - (10 - index if info[index] > 0 else 0),
                      arrow - info[index] - 1, index + 1)
            ryan[index] = 0

        # Case 2: Skip the current index
        backtrack(ryan, score_ryan, score_apeach, arrow, index + 1)

    answer = [-1]
    max_diff = 0
    ryan = [0] * 11
    score_apeach = sum([(10 - i) * info[i] for i in range(11) if info[i] > 0])
    backtrack(ryan, 0, score_apeach, n, 0)

    return answer


# Example usage
print(solution(5, [2,1,1,1,0,0,0,0,0,0,0]))