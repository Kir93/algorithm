for _ in range(int(input())):
    n = int(input())
    if str(n**2).endswith(str(n)):
        print('YES')
    else:
        print('NO')