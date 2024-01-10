# ["SOO","OXX","OOO"]

arr = ["SOO","OXX","OOO"]
arr2 = []
for i in range(len(arr)):
    print('arr[i] : ', arr[i])
    j = 0

    for s in arr[i]:
        if 'X' in s:
            arr2.append([i, j])

        j += 1

print(arr2)
# print(x, y)