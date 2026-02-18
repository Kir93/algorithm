N = int(input())
yn = 0

for _ in range(N):
    if input().rstrip() == "anj":
        yn = 1

print("뭐야;") if yn == 1 else print("뭐야?")