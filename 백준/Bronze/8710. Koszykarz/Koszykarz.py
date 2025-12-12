from math import ceil


k, w, m = map(int, input().split())

print(ceil((w - k) / m))