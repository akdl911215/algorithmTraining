def solution(sequence):
    answer = 0

    sequence_r1 = []
    sequence_r2 = []
    pivot = True
    for i in range(len(sequence)):
        if pivot:
            sequence_r1.append(sequence[i] * 1)
            sequence_r2.append(sequence[i] * -1)
            pivot = False
        else:
            sequence_r1.append(sequence[i] * -1)
            sequence_r2.append(sequence[i] * 1)
            pivot = True

    start, end, list_length = 0, 0, len(sequence)
    while start < list_length:
        answer = max(answer, sum(sequence_r1[start:end + 1]), sum(sequence_r2[start:end + 1]))
        end += 1

        if end >= list_length - 1:
            start += 1
            end = start

    return answer

print(solution([2, 3, -6, 1, 3, -1, 2, 4]))
# 10

# https://school.programmers.co.kr/learn/courses/30/lessons/161988