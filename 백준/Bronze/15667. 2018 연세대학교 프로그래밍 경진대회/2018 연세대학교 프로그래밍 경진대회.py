n = int(input())

for i in range(1, int(n**0.5) + 1):
    if 1 + i + i**2 == n:
        print(i)
        break