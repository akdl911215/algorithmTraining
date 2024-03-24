arr = ["X591X","X1X5X","X231X", "1XXX1"]

for i in range(len(arr)):
    for j in range(len(arr[i])):
        print(arr[i][j])
        print(i, j)

# arr2 = []
# for str in arr:
#     row_arr = [0] * len(str)
#     arr2.append(row_arr)
#
# print(arr2)