test = "abcd"
test_reverse = ""

# for char in test:
#     print(char)
#     test_reverse = char + test_reverse

# print(test_reverse)

for i in range(len(test) - 1, -1, -1):
    test_reverse += test[i]


print(test_reverse)