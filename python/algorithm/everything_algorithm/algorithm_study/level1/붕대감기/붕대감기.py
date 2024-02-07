def solution(bandage, health, attacks):
    answer = 0
    max_health = health

    for [attack_time, damage] in attacks:
        print(attack_time, ', ', damage)
        if bandage[0] > attack_time:
            if max_health > health:
                health += bandage[0] - attack_time
                if health > 30:
                    health = 30


    return answer

# bandage : 기술의 시전 시간, 1초당 회복량, 추가 회복량
# health : 최대 체력
# attacks : 몬스터의 공격 시간, 피해량
print(solution([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]]))
# 5

# print(solution([3, 2, 7], 20, [[1, 15], [5, 16], [8, 6]]))
# -1

# print(solution([4, 2, 7], 20, [[1, 15], [5, 16], [8, 6]]))
# -1

# print(solution([1, 1, 1], 5, [[1, 2], [3, 2]]))
# 3

# https://school.programmers.co.kr/learn/courses/30/lessons/250137