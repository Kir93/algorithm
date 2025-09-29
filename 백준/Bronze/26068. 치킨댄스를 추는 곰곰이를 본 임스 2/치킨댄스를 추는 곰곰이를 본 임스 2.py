c = 0
for _ in range(int(input())):
    _, num = map(str, input().split('D-'))
    if int(num) <= 90:
        c += 1
print(c)