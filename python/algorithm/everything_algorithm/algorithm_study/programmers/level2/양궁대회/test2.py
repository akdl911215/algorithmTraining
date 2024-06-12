from collections import deque

visited = set('A')
print('visited : ', visited)

if 'A' not in visited:
    print('A')

queue = deque('A')
print(queue)

queue2 = deque(['A'])
print('queue2 : ', queue2)

print("-----------------------------")
info = [2,1,1,1,0,0,0,0,0,0,0]
print([10 - i for i in range(10) if info[i]])

print("==============================")
for i in range(10):
    print("i : ", i)

print("==============================")
# print(sum([1,2,3]))

for i in range(8):
    print("888 : ", i)