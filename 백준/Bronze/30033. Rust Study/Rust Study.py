N = int(input())
A = list(input().split())
B = list(input().split())

sum = 0

for i in range(0, N) : 
    if int(A[i]) <= int(B[i]) :
        sum += 1

print(sum)
