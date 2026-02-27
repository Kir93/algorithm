d = {'.': 46, 'O': 79, '-': 124, '|': 45, '/': 92, '\\': 47, '^': 60, '<': 118, 'v': 62, '>': 94}

n, m = map(int, input().split())
box = [input() for _ in range(n)]
rotate = []

for i in range(m - 1, -1, -1):
     row = ['%c' % d[box[j][i]] for j in range(n)]
     rotate.append(row)

for row in rotate:
     print(''.join(row))