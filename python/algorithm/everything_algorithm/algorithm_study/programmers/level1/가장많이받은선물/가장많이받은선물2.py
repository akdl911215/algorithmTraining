def solution(friends, gifts):
    # 선물을 준 횟수와 받은 횟수를 기록하는 딕셔너리 초기화
    given = {friend: 0 for friend in friends}
    received = {friend: 0 for friend in friends}

    # 선물 기록을 분석하여 준 횟수와 받은 횟수를 갱신
    for gift in gifts:
        giver, receiver = gift.split()
        given[giver] += 1
        received[receiver] += 1

    # 각 친구의 선물 지수를 계산
    gift_index = {friend: given[friend] - received[friend] for friend in friends}

    # 다음 달에 각 친구가 받을 선물의 수를 예측
    next_month_gifts = {friend: 0 for friend in friends}
    for friend in friends:
        for other in friends:
            if friend != other:
                # 선물 교환 규칙에 따라 예측
                if gift_index[friend] < gift_index[other]:
                    next_month_gifts[friend] += 1

    # 가장 많은 선물을 받는 친구 찾기
    max_gifts = max(next_month_gifts.values())
    return max_gifts



print(solution(["muzi", "ryan", "frodo", "neo"], ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]))
# 2

# print(solution(["joy", "brad", "alessandro", "conan", "david"], ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]))
# 4

# print(solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"]))
# 0

# https://school.programmers.co.kr/learn/courses/30/lessons/258712