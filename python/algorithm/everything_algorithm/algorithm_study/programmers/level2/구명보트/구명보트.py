def solution(people, limit):
    answer = 0

    p_sort = sorted(people)
    print(p_sort)

    sum = 0
    arr = []
    for key, el in enumerate(p_sort):
        print('key : ', key)
        print('el : ', el)
        sum += el
        if sum == limit:
            arr.append(sum)
            sum = 0
        elif sum >= limit:
            sum -= el
            arr.append(p_sort[key - 1])
            arr.append(p_sort[key])
            sum = 0
    print('arr : ', arr)

    return answer


# print(solution([70, 50, 80, 50], 100)) # 3
print(solution([70, 80, 50], 100)) # 3

# https://school.programmers.co.kr/learn/courses/30/lessons/42885