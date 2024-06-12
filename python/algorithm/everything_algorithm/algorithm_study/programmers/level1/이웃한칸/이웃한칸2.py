def solution(board, h, w):
    answer = 0
    select_board = board[h][w]

    # 높이가 맨 위 일 경우를 제외
    if h > 0:
        if select_board == board[h - 1][w]:
            answer += 1

    # 높이가 맨 아래 일 경우를 제외
    if len(board) > h:
        if select_board == board[h + 1][w]:
            answer += 1

    # 넓이의 위치가 맨 왼쪽 일 경우 제외
    if w > 0:
        if select_board == board[h][w - 1]:
            answer += 1

    # 넓이의 위치가 맨 오른쪽 일 경우 경우 제외
    if len(board[0]) > w:
        if select_board == board[h][w + 1]:
            answer +=1

    return answer


print(solution([["blue", "red", "orange", "red"], ["red", "red", "blue", "orange"], ["blue", "orange", "red", "red"], ["orange", "orange", "red", "blue"]], 1, 1))
# 2

print(solution([["yellow", "green", "blue"], ["blue", "green", "yellow"], ["yellow", "blue", "blue"]], 0, 1))
# 1

# https://school.programmers.co.kr/learn/courses/30/lessons/250125
