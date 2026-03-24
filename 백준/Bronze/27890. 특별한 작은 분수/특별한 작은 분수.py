x, n = map(int, input().split())

for i in range(n):
    if x % 2 == 0:
        x = int(x / 2) ^ 6
    else:
        x = int(2 * x) ^ 6

print(x)