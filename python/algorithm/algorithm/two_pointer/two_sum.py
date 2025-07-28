def two_sum(arr, target):
    left  = 0
    right = len(arr) - 1

    while left < right:
        s = arr[left] + arr[right]

        if s == target:
            return True
        elif s < target:
            left += 1
        else:
            right -= 1
    return False


arr = [1, 3, 5, 7, 10]  # 반드시 "오름차순 정렬" 상태여야 함
target = 13
print(two_sum(arr, target))  # True (3 + 10)
