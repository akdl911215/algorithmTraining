arr = [5, 3, 8, 1]

for i in range(len(arr) - 1):
    for j in range(0, len(arr) - i - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]
