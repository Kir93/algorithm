int(input())
name = input()
r = 0

for n in name:
    r += ord(n) - 64

print(r)