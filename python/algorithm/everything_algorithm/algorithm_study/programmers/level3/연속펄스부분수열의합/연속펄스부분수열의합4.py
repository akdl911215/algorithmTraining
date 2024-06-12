def solution(sequence):
    # 길이가 1인 경우, 최대값은 수열의 첫 번째 원소입니다.
    if len(sequence) == 1:
        return sequence[0]

    # dp1과 dp2 배열 초기화: dp1은 1로 시작하는 펄스 수열, dp2는 -1로 시작하는 펄스 수열
    dp1 = [0] * len(sequence)
    dp2 = [0] * len(sequence)

    # 초기값 설정
    dp1[0] = sequence[0]  # 1로 시작
    dp2[0] = -sequence[0]  # -1로 시작

    # 최대 합을 저장할 변수
    max_sum = max(dp1[0], dp2[0])

    # 동적 프로그래밍을 사용하여 각 위치에서의 최대 연속 펄스 부분 수열의 합을 계산
    for i in range(1, len(sequence)):
        dp1[i] = max(dp1[i - 1] + sequence[i] * ((-1) ** (i + 1)), sequence[i] * ((-1) ** (i + 1)))
        dp2[i] = max(dp2[i - 1] + sequence[i] * ((-1) ** i), sequence[i] * ((-1) ** i))

        # 현재 위치에서의 최대값을 max_sum에 저장
        max_sum = max(max_sum, dp1[i], dp2[i])

    return max_sum


# 주어진 수열
sequence = [2, 3, -6, 1, 3, -1, 2, 4]

# 함수 호출 및 결과 출력
print(solution(sequence))
