int(input())
ls = list(map(int, input().split()))
before = -1
r = 0
for m in ls:
    if before == -1 and m == 0:
        r += 1
        before = m
    elif before == 0 and m == 1:
        r += 1
        before = m
    elif before == 1 and m == 2:
        r += 1
        before = m
    elif before == 2 and m == 0:
        r += 1
        before = m
print(r)