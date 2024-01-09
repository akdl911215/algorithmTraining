def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        # 왼쪽과 오른쪽 부분을 각각 정렬
        merge_sort(L)
        merge_sort(R)

        i = j = k = 0

        # 병합 과정
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        # 왼쪽 부분에 남은 요소들을 배열에 복사
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        # 오른쪽 부분에 남은 요소들을 배열에 복사
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1

    return arr

# 예시 배열
arr = [38, 27, 43, 3, 9, 82, 10]

# 병합 정렬 실행
sorted_arr = merge_sort(arr)
print("정렬된 배열:", sorted_arr)
