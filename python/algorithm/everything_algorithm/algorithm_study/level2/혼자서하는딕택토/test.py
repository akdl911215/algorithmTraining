table = [['O', '.', 'X'],
         ['.', 'O', '.'],
         ['.', '.', 'X']]

# 좌표 출력
for row in table:
    for cell in row:
        print(cell, end=' ')
    print()