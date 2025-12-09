ls = list(map(int, input().split()))
print(1 if ls.count(1) > ls.count(2) else 2)