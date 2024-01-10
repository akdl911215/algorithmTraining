def is_within_bounds(x, y, H, W):

    return 0 <= x < H and 0 <= y < W

def is_path_clear(x, y, dx, dy, park):
    # 이동 경로 상에 장애물이 있는지 검사합니다.
    while True:
        x, y = x + dx, y + dy
        if not is_within_bounds(x, y, len(park), len(park[0])) or park[x][y] == 'X':
            return False
        if (dx == 0 and y == dy) or (dy == 0 and x == dx):
            break
    return True

def move_robot(commands, park):
    x, y = 0, 0  # 시작 위치

    direction_map = {
        "N": (-1, 0),
        "E": (0, 1),
        "S": (1, 0),
        "W": (0, -1)
    }   # N: 북, S: 남, W: 서, E: 동

    for command in commands:
        direction, distance = command.split()
        distance = int(distance)

        dx, dy = direction_map[direction]
        if is_path_clear(x, y, dx * distance, dy * distance, park):
            x, y = x + dx * distance, y + dy * distance

    return [x, y]

# 예시 사용
park = [
    ["O", "O", "O", "X", "O"],
    ["O", "X", "O", "O", "O"],
    ["O", "O", "O", "X", "O"],
    ["O", "O", "X", "O", "O"]
]
commands = ["E 3", "S 2", "W 1"]
final_position = move_robot(commands, park)
print(final_position)