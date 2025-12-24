x, y = 0, 0

for _ in range(int(input())):
    winner = input()
    if winner == 'D':
        x += 1
    else: 
        y += 1
    if abs(x - y) >= 2:
        break

print(f'{x}:{y}')