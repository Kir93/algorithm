l = int(input())
i = 5
c = 0

while l > 0:
    c +=  l // i
    l %= i
    i -= 1

print(c)