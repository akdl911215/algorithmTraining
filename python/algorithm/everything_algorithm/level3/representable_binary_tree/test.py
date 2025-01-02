binary_string = "0111010"
decimal_number = int(binary_string, 2)
print(decimal_number)

b = '111'
nodes = bin(len(b) + 1)[2:]
print(nodes) # 100

c = '123'
d = c[1:]
print(d)

e = 1 << len('111')
print(e)
