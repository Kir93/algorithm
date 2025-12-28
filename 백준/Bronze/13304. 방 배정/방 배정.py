import math

N, K = map(int, input().split())
student = [0, 0, 0, 0, 0]

for _ in range(N):
    S, Y = map(int, input().split())
    if Y == 1 or Y == 2:
        student[0] += 1
    elif S == 0 and (Y == 3 or Y == 4):
        student[1] += 1
    elif S == 1 and (Y == 3 or Y == 4):
        student[2] += 1
    elif S == 0 and (Y == 5 or Y == 6):
        student[3] += 1
    else:
        student[4] += 1
        
room = 0
for i in student:
    room += math.ceil(i / K)
print(room)