original = [1, 2, 3]

a = {}
for key, value in original.items():
    a[key] = value

print(a)


b = {key: value for key, value in original.items()}
print(b)