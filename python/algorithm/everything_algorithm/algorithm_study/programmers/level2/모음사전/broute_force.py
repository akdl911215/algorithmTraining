from itertools import combinations

arr = [2, 3, 5, 7, 8]

target_sum = 10

def find_subsets(arr, target_sum):
    n = len(arr)
    result = []
    # 1 부터 n 개의 원소를 가지는 모든 부분집합을 생성
    for r in range(1, n + 1):
        for subset in combinations(arr, r):
            print('subset : ', subset)
            if sum(subset) == target_sum:
                result.append(subset)

    return result

# 부분집합 찾기
subsets = find_subsets(arr, target_sum)

print("합이 10이 되는 부분 집합들 :")
for subset in subsets:
    print(subset)