s = input()
lst = [1, 2, 3, 4]

for c in s:
    if c == 'A':
        lst[0], lst[1] = lst[1], lst[0]
    elif c == 'B':
        lst[0], lst[2] = lst[2], lst[0]
    elif c == 'C':
        lst[0], lst[3] = lst[3], lst[0]
    elif c == 'D':
        lst[1], lst[2] = lst[2], lst[1]
    elif c == 'E':
        lst[1], lst[3] = lst[3], lst[1]
    elif c == 'F':
        lst[2], lst[3] = lst[3], lst[2]

print(lst.index(1) + 1)
print(lst.index(4) + 1)