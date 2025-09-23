def lower_bound(a, x):
    lo, hi = 0, len(a)

    while lo < hi:
        mid = (lo + hi) // 2
        if x > a[mid]: lo = mid + 1
        else: hi = mid
    return lo

arr = [1, 2, 4, 4, 5, 7]

print(lower_bound(arr, 4))  # 2  (arr[2] == 4, 첫 번째 4의 위치)
print(lower_bound(arr, 6))  # 5  (arr[5] == 7, 6 이상 첫 위치)
print(lower_bound(arr, 8))  # 6  (모든 값이 8보다 작음 → len(arr))
print(lower_bound(arr, 0))  # 0  (0 이상 첫 위치는 arr[0])