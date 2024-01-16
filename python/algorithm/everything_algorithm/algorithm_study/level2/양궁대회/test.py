from collections import deque

queue = deque([1, 2, 3])
print('queue : ', queue)

a = queue.popleft()
print('a : ', a)
print('queue : ', queue)

b = queue.pop()
print('b : ', b)
print('queue : ', queue)