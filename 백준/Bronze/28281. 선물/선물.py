n, x = map(int, input().split())
a = list(map(int, input().split()))

r = float('inf')

for i in range(1, n):
    c = a[i - 1] * x + a[i] * x
    if r > c:
        r = c

print(r)