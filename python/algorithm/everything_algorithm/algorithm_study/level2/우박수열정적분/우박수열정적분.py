def solution(k, ranges):
    index = 0
    arr = [[index, k]]
    index += 1

    while k != 1:
        if k % 2 == 0:
            k = k / 2
            arr.append([index, k])
            index += 1
        else:
            k = k * 3 + 1
            arr.append([index, k])
            index += 1

    n = len(arr) - 1
    resultArr = []

    def calculator(start, end, arr):
        result = 0
        for i in range(start, end):
            result += ((arr[i][1] + arr[i + 1][1]) * (arr[i + 1][0] - arr[i][0])) / 2
        return result

    for i in range(len(ranges)):
        [first, seconds] = ranges[i]

        if first == 0 and seconds == 0:
            resultArr.append(calculator(0, n, arr))
        elif first > n + seconds:
            resultArr.append(-1)
        else:
            resultArr.append(calculator(first, n + seconds, arr))

    return resultArr


print(
    solution(5, [
        [0, 0],
        [0, -1],
        [2, -3],
        [3, -3],
    ])
)

# [33.0,31.5,0.0,-1.0]
