ls = []
for _ in range(5):
    s = int(input())
    if s in ls:
        ls.remove(s)
    else:
        ls.append(s)
print(ls[0])