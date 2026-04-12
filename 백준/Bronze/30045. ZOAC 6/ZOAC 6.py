cnt = 0

for i in range(int(input())):
    s = input()
    if s.count('01') >= 1 or s.count('OI'):
        cnt += 1
        
print(cnt)