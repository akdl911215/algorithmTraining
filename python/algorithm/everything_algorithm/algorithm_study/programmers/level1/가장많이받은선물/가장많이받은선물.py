def solution(friends, gifts):
    answer = 0

    # If A > B, then B gives a gift to A
    # A와 B가 선물을 주고받은 기록이 하나도 없거나 동일하다면, 선물 지수가 더 큰 사람이 작은사람에게 받는다
    # 그럼에도 불구하고 선물 지수도 같다면 주고받지 않는다.


    return answer

print(solution(["muzi", "ryan", "frodo", "neo"], ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]))
# 2

# print(solution(["joy", "brad", "alessandro", "conan", "david"], ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]))
# 4

# print(solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"]))
# 0

# https://school.programmers.co.kr/learn/courses/30/lessons/258712