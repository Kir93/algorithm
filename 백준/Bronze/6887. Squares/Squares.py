n = int(input())
a = 1

while a ** 2 <= n:
    a += 1

print(f"The largest square has side length {a-1}.")