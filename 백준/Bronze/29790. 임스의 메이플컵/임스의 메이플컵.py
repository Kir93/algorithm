n, u, l = map(int, input().split())

if n >= 1000 and (u >= 8000 or l >= 260):
    print('Very Good')
elif n < 1000:
    print('Bad')
else:
    print('Good')