N, K = map(int, input().split())
student = [[0] * 3 for _ in range(2)]

for _ in range(N):
    S, Y = map(int, input().split())
    student[S][(Y - 1) // 2] += 1

print(sum((cnt + K - 1) // K for row in student for cnt in row))