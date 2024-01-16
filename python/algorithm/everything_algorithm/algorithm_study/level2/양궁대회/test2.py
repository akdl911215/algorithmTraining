from collections import deque

visited = set('A')
print('visited : ', visited)

if 'A' not in visited:
    print('A')

queue = deque('A')
print(queue)

queue2 = deque(['A'])
print('queue2 : ', queue2)