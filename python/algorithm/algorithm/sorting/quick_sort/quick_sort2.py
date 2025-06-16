import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')


def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[0]
    left = [x for x in arr[1:] if x < pivot]
    right = [x for x in arr[1:] if x >= pivot]

    sort_left = quicksort(left)
    sort_right = quicksort(right)
    return sort_left + [pivot] + sort_right

print(quicksort([5, 3, 8, 4, 2]))