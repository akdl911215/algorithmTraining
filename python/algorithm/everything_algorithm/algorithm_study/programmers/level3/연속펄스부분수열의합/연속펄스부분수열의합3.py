def solution(sequence):
    answer = []

    sequence_r = []
    pivot = True
    for i in range(len(sequence)):
        if pivot:
            sequence_r.append(sequence[i] * 1)
            pivot = False
        else:
            sequence_r.append(sequence[i] * -1)
            pivot = True

    start, end, list_length = 0, 0, len(sequence)
    while start < list_length:

        end += 1

        r1 = sum(sequence_r[start:end])
        r2 = -1 * r1


        answer.append(r1)
        answer.append(r2)

        if end >= list_length:
            start += 1
            end = start

    return sorted(answer)[-1]

print(solution([2, 3, -6, 1, 3, -1, 2, 4]))
# 10

# https://school.programmers.co.kr/learn/courses/30/lessons/161988