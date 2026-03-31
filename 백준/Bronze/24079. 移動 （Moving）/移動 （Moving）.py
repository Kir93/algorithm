x = int(input())
y = int(input())
z = int(input())

move_time = (x + y) * 60
limit_time = (z * 60) + 30

if move_time < limit_time:
    print(1)
else:
    print(0)