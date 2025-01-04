def quick_sort(arr):
    # 배열 길이가 1 이하일 경우 이미 정렬된 상태이므로 그대로 반환
    if len(arr) <= 1:
        return arr

    # 피벗 선택 (여기서는 리스트의 첫 번째 요소를 피벗으로 선택)
    pivot = arr[0]

    # 피벗보다 작은 값들
    left = [x for x in arr[1:] if x <= pivot]

    right = [x for x in arr[1:] if x > pivot]

    # 재귀적으로 왼쪽과 오른쪽을 정렬하고, 피벗을 가운데에 놓음
    q_left = quick_sort(left)
    q_right = quick_sort(right)
    sum = q_left + [pivot] + q_right

    return sum

# 테스트
arr = [10, 7, 8, 9, 1, 5]
sorted_arr = quick_sort(arr)
print(sorted_arr)  # 출력: [1, 5, 7, 8, 9, 10]