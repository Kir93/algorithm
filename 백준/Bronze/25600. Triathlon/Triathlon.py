max_score = 0

for _ in range(int(input())):
    a, d, g = map(int, input().split())
    plus = d + g
    score = (a * plus) * 2 if a == plus else a * plus
    max_score = max(max_score, score)

print(max_score)