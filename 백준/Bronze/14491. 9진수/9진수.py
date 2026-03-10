n = int(input())
res = ''
t = 0

while 9**t <= n:
    t += 1

res = ''

for i in range(t-1, -1, -1):
    res += str(n//(9**i))
    n = n%(9**i)
    
print(res)