import sys

a = [n for n in range(1000000)]
b = range(1000000)

print(len(a))
# 1000000
print(len(b))
# 1000000
print(len(a) == len(b))
# True

print(b)
# range(0, 1000000)
print(type(b))
# <class 'range'>

print(sys.getsizeof(a))
# 8697456
print(sys.getsizeof(b))
# 48

print(b[999])
# 999