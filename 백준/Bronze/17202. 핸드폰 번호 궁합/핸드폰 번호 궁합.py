a = list(input())
b = list(input())

answer = []

for i in range(len(a)):
    answer.append(a[i])
    answer.append(b[i])

temp = []


while len(answer) != 2:
    for i in range(len(answer) - 1):
        temp.append(str((int(answer[i]) + int(answer[i + 1]))%10))
    answer, temp = temp, []

print(''.join(answer))