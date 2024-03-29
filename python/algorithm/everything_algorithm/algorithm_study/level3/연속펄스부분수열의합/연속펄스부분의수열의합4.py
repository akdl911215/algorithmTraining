def solution(sequence):
    sequence_r = []
    pivot = True
    for i in range(len(sequence)):
        if pivot:
            sequence_r.append(sequence[i] * 1)
            pivot = False
        else:
            sequence_r.append(sequence[i] * -1)
            pivot = True

    current_max = global_max = sequence_r[0]
    current_max2 = global_max2 = sequence_r[0] * -1

    # 카데인 알고리즘
    for r1 in sequence_r[1:]:
        r2 = -1 * r1

        current_max = max(r1, current_max + r1)
        current_max2 = max(r2, current_max2 + r2)

        global_max = max(global_max, current_max)
        global_max2 = max(global_max2, current_max2)

    return max(global_max2, global_max)

print(solution([2, 3, -6, 1, 3, -1, 2, 4]))
# 10

# https://school.programmers.co.kr/learn/courses/30/lessons/161988