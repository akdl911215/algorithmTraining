A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for x in zip(*A):
    print(x)
print("---------------------------")
print('A:', A)
print('*A:', *A)

# zip 결과
print('zip(*A):', list(zip(*A)))

# map 결과
print('map(list, zip(*A)):', list(map(list, zip(*A))))

A_T = list(map(list, zip(*A)))
print(A_T) # [[1, 4], [2, 5], [3, 6]]