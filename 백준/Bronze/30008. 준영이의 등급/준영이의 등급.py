n, k = map(int, input().split())
ls = list(map(int, input().split()))
result = []

for i in ls:
    p = (i * 100) // n
    if 0 <= p <= 4:
        result.append(1)
    elif 4 < p <= 11:
        result.append(2)
    elif 11 < p <= 23:
        result.append(3)
    elif 23 < p <= 40:
        result.append(4)
    elif 40 < p <= 60:
        result.append(5)
    elif 60 < p <= 77:
        result.append(6)
    elif 77 < p <= 89:
        result.append(7)
    elif 89 < p <= 96:
        result.append(8)
    elif 96 < p <= 100:
        result.append(9)

print(' '.join(map(str, result)))
