circle = 0

for i in range(4):
    circle += int(input())
    
if circle + 300 > 1800:
    print("No")
else: 
    print("Yes")