int(input())
ls = list(map(int, input().split()))

check = 0

for c in ls:
    if c%2 == 0:
        check += 1
    else:
        check -= 1

if check > 0:
    print('Happy')
else:
    print('Sad')