int(input())
ls = map(int,input().split())
k = 1
cnt = 0

for j in ls:
	if j == k:
		k += 1
	else:
		cnt += 1
        
print(cnt)