n, h, v = map(int, input().split())

res = max(h*v, (n-h)*v, h*(n-v), (n-h)*(n-v))
print(res * 4)