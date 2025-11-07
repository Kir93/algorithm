A, B, C, D = map(int, input().split())
delivery = list(map(int, input().split()))

for t in delivery:
    dog = 0
    if 0 < t % (A + B) <= A:
        dog += 1
    if 0 < t % (C + D) <= C:
        dog += 1
        
    print(dog)