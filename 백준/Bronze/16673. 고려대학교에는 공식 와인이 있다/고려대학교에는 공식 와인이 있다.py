c, k, p = map(int, input().split())
r = 0

for i in range(1, c + 1):
    r += k * i + p * i * i

print(r)