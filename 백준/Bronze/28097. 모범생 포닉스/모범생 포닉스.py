n = int(input())
t = list(map(int, input().split()))
d, h = 0, 0

d = (sum(t) + ((n - 1) * 8)) // 24
h = (sum(t) + ((n - 1) * 8)) % 24

print(d, h)