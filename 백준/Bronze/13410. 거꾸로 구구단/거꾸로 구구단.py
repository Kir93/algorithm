n, k = map(int, input().split())
result = [int(str(n * (i + 1))[::-1]) for i in range(k)]
print(max(result))