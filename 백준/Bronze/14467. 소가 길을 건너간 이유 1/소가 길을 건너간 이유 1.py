n = int(input())

cow = [0 for _ in range(n+1)]
now = [-1 for _ in range(n+1)]

for i in range(n):
    i, location = map(int, input().split())
    if now[i] == -1:
        now[i] = location
    elif now[i] != location:
        cow[i] += 1
        now[i] = location

print(sum(cow))