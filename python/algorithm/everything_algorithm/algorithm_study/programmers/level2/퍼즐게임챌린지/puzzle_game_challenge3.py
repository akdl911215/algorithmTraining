def solution(diffs, times, limit):
    def total_time_needed(level):
        total_time = 0
        time_prev = 0  # 첫 번째 퍼즐의 이전 퍼즐은 없으므로 0으로 시작
        for diff, time_cur in zip(diffs, times):
            if diff <= level:
                total_time += time_cur
            else:
                mistakes = diff - level
                total_time += mistakes * (time_cur + time_prev) + time_cur
            time_prev = time_cur
            if total_time > limit:  # 시간을 초과하면 더 계산할 필요 없음
                return total_time
        return total_time

    # 이진 탐색 초기 범위 설정
    left, right = 1, max(diffs)
    answer = right

    while left <= right:
        mid = (left + right) // 2
        if total_time_needed(mid) <= limit:
            answer = mid  # 가능한 최소 level을 갱신
            right = mid - 1  # 더 낮은 level이 가능한지 확인
        else:
            left = mid + 1  # level이 충분하지 않음 -> 더 높여야 함

    return answer

# Example usage
print(solution([1, 5, 3], [2, 4, 7], 30))  # Output: 3
print(solution([1, 4, 4, 2], [6, 3, 8, 2], 59))  # Output: 2
