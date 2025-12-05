N = int(input())

res = 1

for i in range(11, N+1):
    res *= i
        
print(6*res)