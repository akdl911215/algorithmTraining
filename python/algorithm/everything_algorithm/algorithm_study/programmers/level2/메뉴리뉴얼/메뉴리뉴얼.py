from collections import defaultdict

def solution(orders, course):
    answer = []

    dic = defaultdict(int)

    for order in orders:
        dic[len(order)] += 1
    print('dic : ', dic)
    print('dic[1] : ', dic[1])
    print('dic[2] : ', dic[2])

    order_list = [length for length, count in dic.items() if count >= 2]
    print('order_list : ', order_list)

    return answer

print(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]))
# ["AC", "ACDE", "BCFG", "CDE"]

# print(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5]))
# ["ACD", "AD", "ADE", "CD", "XYZ"]

# print(solution(["XYZ", "XWY", "WXA"], [2,3,4]))
# ["WX", "XY"]

# https://school.programmers.co.kr/learn/courses/30/lessons/72411