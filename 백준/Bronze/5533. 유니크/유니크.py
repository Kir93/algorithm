n = int(input())
rounds = [[] for _ in range(3)]
scores = [0] * n

for _ in range(n):
    points = list(map(int, input().split()))
    for j in range(3):
        rounds[j].append(points[j])

for i in range(3):
    for j in range(n):
        if rounds[i].count(rounds[i][j]) <= 1:
            scores[j] += rounds[i][j]

for score in scores:
    print(score)