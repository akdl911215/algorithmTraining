from itertools import combinations


def simulate_mentors(k, n, reqs, distribution):
    waiting_time = 0
    mentors = [[] for _ in range(k)]  # 각 유형별 멘토 큐

    for a, b, c in reqs:
        type_idx = c - 1
        min_wait = float('inf')
        selected_mentor = None

        # 멘토 중에서 가장 빨리 사용할 수 있는 멘토 찾기
        for i in range(distribution[type_idx]):
            if len(mentors[type_idx]) <= i or mentors[type_idx][i] <= a:
                min_wait = 0
                selected_mentor = i
                break
            else:
                wait_time = mentors[type_idx][i] - a
                if wait_time < min_wait:
                    min_wait = wait_time
                    selected_mentor = i

        waiting_time += min_wait
        if len(mentors[type_idx]) <= selected_mentor:
            mentors[type_idx].append(a + b + min_wait)
        else:
            mentors[type_idx][selected_mentor] = a + b + min_wait

    return waiting_time


def distribute_mentors(n, k):
    if k == 1:
        return [[n]]

    results = []
    for i in range(1, n - k + 2):
        for sub_result in distribute_mentors(n - i, k - 1):
            results.append([i] + sub_result)
    return results


def solution(k, n, reqs):
    best_time = float('inf')
    # best_distribution = None

    for distribution in distribute_mentors(n, k):
        waiting_time = simulate_mentors(k, n, reqs, distribution)
        if waiting_time < best_time:
            best_time = waiting_time
            # best_distribution = distribution

    return best_time


# 입력 예시
k = 3
n = 5
reqs = [[10, 60, 1], [15, 100, 3], [20, 30, 1], [30, 50, 3], [50, 40, 1], [60, 30, 2], [65, 30, 1], [70, 100, 2]]

# 함수 실행
print(solution(k, n, reqs))  # 25 출력

k = 2
n = 3
reqs = [[5, 55, 2], [10, 90, 2], [20, 40, 2], [50, 45, 2], [100, 50, 2]]

# 함수 실행
print(solution(k, n, reqs))  # 90 출력
