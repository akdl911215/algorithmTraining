def solution(n, m, sections):
    answer = 1
    prev = sections[0]
    for sec in sections:
        if sec - prev >= m:
            prev = sec
            answer += 1

    return answer

# print(solution(8, 4, [2, 3, 6]))
# 2

# print(solution(5, 4, [1, 3]))
# 1

# print(solution(4, 1 [1, 2, 3, 4]))
# 4

# https://school.programmers.co.kr/learn/courses/30/lessons/161989

# 예시를 위한 테스트
# n = 10  # 벽의 길이
# m = 3   # 롤러의 길이
# sections = [1, 2, 3, 4, 5, 6, 10]  # 페인트를 칠해야 하는 구역들

# 솔루션 함수 호출
# print(solution(n, m, sections))
