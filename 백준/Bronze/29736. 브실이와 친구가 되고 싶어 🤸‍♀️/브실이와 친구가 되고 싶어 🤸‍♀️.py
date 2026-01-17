A, B = map(int, input().split())
K, X = map(int, input().split())

cnt = 0

for i in range(K-X, K+X+1) : 
    if i >= A and B >= i : 
        cnt += 1

if cnt == 0 : 
    print('IMPOSSIBLE')
else :
    print(cnt)