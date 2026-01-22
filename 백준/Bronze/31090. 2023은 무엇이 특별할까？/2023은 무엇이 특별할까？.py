for i in range(1, int(input()) + 1):
    n = input()
    if (int(n) + 1) % int(n[-2:]) == 0:
        print('Good')
    else:
        print('Bye')