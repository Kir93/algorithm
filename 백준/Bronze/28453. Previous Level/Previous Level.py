int(input())
ls = list(map(int, input().split()))

for i in ls:
    lank = 0
    if i == 300:
        lank = 1
    elif i >= 275:
        lank = 2
    elif i >= 250:
        lank = 3
    else:
        lank = 4

    print(lank, end=' ')

print()