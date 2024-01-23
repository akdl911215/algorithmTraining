info = [2,1,1,1,0,0,0,0,0,0,0]

score = sum([10 - i for i in range(10) if info[i]])
print('score :  ', score)

score2 = sum([10 - i for i in range(9, -1, -1) if info[i]])
print('score2 : ', score2)

print("-------------------------------")
# for i in range(9, -1, -1):
#     print(i)

print("11 : ", [3] + [3])
# [3, 3] 으로 만들어짐

print("-------------------------------")
print([1,2,3] + [0] * 3)

print('-------------------------------')
sum = 0
for i in info:
    if i:
        print('i ::: ', i)
        sum += i
print('aaaa ' , sum)