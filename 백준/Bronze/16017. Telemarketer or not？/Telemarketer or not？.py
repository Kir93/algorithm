answer = 'ignore'
prev_n = -1

for i in range(4):
    n = int(input())
    if answer == 'answer':
        continue
    if i == 1:
        prev_n = n
    if i == 2 and n != prev_n:
        answer = 'answer'
    if i == 0 and n != 8 and n != 9:
        answer = 'answer'
    if i == 3 and n != 8 and n != 9:
        answer = 'answer'
print(answer)