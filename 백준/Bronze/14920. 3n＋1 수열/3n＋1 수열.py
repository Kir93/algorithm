c = 1
n = int(input())

while n != 1:
    n = n//2 if n % 2 == 0 else 3 * n + 1
    c += 1

print(c)