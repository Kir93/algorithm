ls = sorted(list(map(int, input().split())))
print(abs((ls[0] + ls[-1]) - (ls[1] + ls[-2])))