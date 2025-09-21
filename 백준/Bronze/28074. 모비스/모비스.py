target = ['M', 'O', 'B', 'I', 'S']
check = True
s = input()

for c in target:
    if c not in s:
        check = False
        break

print('YES' if check else 'NO')