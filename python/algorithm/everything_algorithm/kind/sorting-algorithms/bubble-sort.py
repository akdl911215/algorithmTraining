def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr

arr = [64, 34, 25, 12, 22, 11, 90]

# 버블 정렬 실행
sorted_arr = bubble_sort(arr)
print("정렬된 배열:", sorted_arr)