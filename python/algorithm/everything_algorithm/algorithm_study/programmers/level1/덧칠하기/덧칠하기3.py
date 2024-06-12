def solution(n, m, sections):
    sections.sort()

    # 롤러 사용 횟수
    roller_count = 0

    # 현재 롤러가 커버할 수 있는 마지막 구역
    current_end = 0

    for section in sections:
        # 현재 구역이 이전 롤러가 커버한 구역을 넘어설 경우
        if section > current_end:
            # 롤러 사용 횟수 증가
            roller_count += 1
            # 현재 롤러가 커버할 수 있는 새로운 마지막 구역 설정
            current_end = section + m - 1

    return roller_count

print(solution(8, 4, [2, 3, 6]))
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
