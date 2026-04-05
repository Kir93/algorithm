n = int(input())
pasta = input().split()
chef = input().split()

for p in pasta:
    if p not in chef:
        print(p)
        break
