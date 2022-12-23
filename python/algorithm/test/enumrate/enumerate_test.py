a = [1, 2, 3, 2, 45, 2, 5]
print(a)
# [1, 2, 3, 2, 45, 2, 5]

print(enumerate(a))
# <enumerate object at 0x102ce9640>

print(list(enumerate(a)))
# [(0, 1), (1, 2), (2, 3), (3, 2), (4, 45), (5, 2), (6, 5)]

b = ['a1', 'b2', 'c3']
print(b)
# ['a1', 'b2', 'c3']

print(list(enumerate(b)))
# [(0, 'a1'), (1, 'b2'), (2, 'c3')]

for i in range(len(b)):
    print(i, b[i])
# 0 a1
# 1 b2
# 2 c3

print('----------')
for i, v in enumerate(b):
    print(i, v)
# 0 a1
# 1 b2
# 2 c3