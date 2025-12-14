n, m = map(int, input().split())
ls = list(map(int, input().split()))
res = 0
for i in range(1, n+1):
    for n in ls:
        if i%n == 0:
            res += i
            break
print(res)