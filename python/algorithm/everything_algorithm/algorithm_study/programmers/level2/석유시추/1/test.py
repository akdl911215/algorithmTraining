arr = [
        [0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 1, 1]
      ]

def dfs(grid, x, y, visited):
    if x < 0 or x >= len(grid) or y < 0 or y >= len(grid[0]) or grid[x][y] == 0 or grid[x][y]:
        return
    visited[x][y] = True
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)] # 상하좌우 탐색
    for dx, dy in directions:
        dfs(grid, x + dx, y + dy, visited)

def countIslands(grid):
    if not grid:
        return 0
    visited = [[False for _ in range(len(grid[0]))] for _ in range(len(grid))]
    count = 0
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == 1 and not visited[i][j]:
                dfs(grid, i, j, visited)
                count += 1
    return count

print(countIslands(arr))