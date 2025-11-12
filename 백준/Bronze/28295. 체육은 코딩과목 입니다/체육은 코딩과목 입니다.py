command_line = ['N', 'E', 'S', 'W']
p = 0

for _ in range(10):
    c = int(input())
    if c == 1:
        if p == 3:
            p = 0
        else:
            p += 1
    elif c == 2:
        if p >= 2:
            p -= 2
        else:
            p += 2
    elif c == 3:
        if p == 0:
            p = 3
        else:
            p -= 1

print(command_line[p])