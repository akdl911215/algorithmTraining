
def solution(target):
    dyn = [[100000, 0] for col in range(target+1)]
    dyn[0][0] = 0
    count = 0
    while target > 1000:
        target -= 60
        count += 1

    for i in range(target):
        for j in range(1, 21):

            if i+j <= target and (dyn[i+j][0] > dyn[i][0] + 1 or (dyn[i+j][0] == dyn[i][0]+1 and dyn[i+j][1] < dyn[i][1]+1)):
                dyn[i+j][0] = dyn[i][0] + 1
                dyn[i+j][1] = dyn[i][1] + 1
            if i+j+j <= target and (dyn[i+j+j][0] > dyn[i][0] + 1 or (dyn[i+j+j][0] == dyn[i][0]+1 and dyn[i+j+j][1] < dyn[i][1])):
                dyn[i+j+j][0] = dyn[i][0] + 1
                dyn[i+j+j][1] = dyn[i][1]
            if i+j+j+j <= target and (dyn[i+j+j+j][0] > dyn[i][0] + 1 or (dyn[i+j+j+j][0] == dyn[i][0]+1 and dyn[i+j+j+j][1] < dyn[i][1])):
                dyn[i+j+j+j][0] = dyn[i][0] + 1
                dyn[i+j+j+j][1] = dyn[i][1]
        if i+50 <= target and (dyn[i+50][0] > dyn[i][0]+1 or (dyn[i+50][0] == dyn[i][0]+1 and dyn[i+50][1] < dyn[i][1]+1)):
            dyn[i+50][0] = dyn[i][0] + 1
            dyn[i+50][1] = dyn[i][1] + 1

    dyn[target][0] += count
    answer = dyn[target]
    return answer

print(solution(21))
# [1,0]

print(solution(58))
# [2,2]
