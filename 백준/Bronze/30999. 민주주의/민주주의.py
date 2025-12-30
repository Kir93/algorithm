n, m = map(int, input().split())
r = 0

for _ in range(n):
    vote = input()
    if vote.count('O') > vote.count('X'):
        r += 1

print(r)