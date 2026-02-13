k = int(input())
d1, d2 = map(int, input().split())

res = k**2 - ((d1-d2)/2)**2
print(res)