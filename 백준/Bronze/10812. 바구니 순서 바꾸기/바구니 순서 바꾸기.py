n, m = map(int, input().split())
ls = [i for i in range(1, n + 1)]

for _ in range(m):
    i, j, k = map(int, input().split())
    ls = ls[:i - 1] + ls[k - 1:j] + ls[i - 1: k - 1] + ls[j:]

print(*ls)