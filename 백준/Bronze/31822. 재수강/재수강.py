subjectCode = input()
n = int(input())
result = 0

for _ in range(n):
    availableCode = input()
    if subjectCode[:5] == availableCode[:5]:
        result += 1

print(result)