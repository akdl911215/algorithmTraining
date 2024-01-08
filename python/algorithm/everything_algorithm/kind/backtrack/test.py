row = 3
col = 4

for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
    print(i, j)

print("----------------------------------")

for i, j in zip(range(row, -1, -2), range(col, -1, -2)):
    print(i, j)

print("----------------------------------")

for i, j in zip(range(row, 10, 2), range(col, 10, 2)):
    print(i, j)