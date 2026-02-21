R, C = map(int, input().split())
board = [list(input().strip()) for _ in range(R)]
A_r, A_c = map(int, input().split())

for i in range(R):
    board[i].extend(board[i][::-1])

for i in range(R-1, -1, -1):
    board.append(board[i][:])

if board[A_r-1][A_c-1] == '#':
    board[A_r-1][A_c-1] = '.'
else:
    board[A_r-1][A_c-1] = '#'

for row in board:
    print("".join(row))