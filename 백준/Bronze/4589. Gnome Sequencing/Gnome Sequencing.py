n = int(input())
print("Gnomes:")

for _ in range(n):
    ls = list(map(int, input().split()))
    if ls == sorted(ls) or ls == sorted(ls, reverse=True):
        print("Ordered")
    else:
        print('Unordered')