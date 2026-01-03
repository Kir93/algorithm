a, b, c = map(int, input().split())

if a == b == c:
    print('*')
elif b == c:
    print('A')
elif a == c:
    print('B')
else:
    print('C')