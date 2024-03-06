def solution(people, limit):
    answer = 0

    p_sort = sorted(people)
    print(p_sort)

    arr = []
    start, end = 0, 1
    length = len(p_sort)
    while end <= length:
        sum = p_sort[start] + p_sort[end]

        if sum == limit:
            arr.append(sum)
            start += 2
            end += 2
        elif sum > limit:
            arr.append(p_sort[start])
            arr.append(p_sort[end])
            start += 1
            end += 1



    return answer


print(solution([70, 50, 80, 50], 100)) # 3
# print(solution([70, 80, 50], 100)) # 3

# https://school.programmers.co.kr/learn/courses/30/lessons/42885