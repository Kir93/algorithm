n, a, b = map(int, input().split())

if a == b:
    print('Anything')
else:
    print('Bus' if a < b else 'Subway')