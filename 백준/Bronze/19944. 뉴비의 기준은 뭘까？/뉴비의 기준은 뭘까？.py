n, m = map(int, input().split())
if m <= n and m > 2: 
    print('OLDBIE!')
elif m <= 2:
    print('NEWBIE!')
else:
    print('TLE!')