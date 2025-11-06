forms = {'c': 26, 'd': 10}
plate = input()

answer = forms[plate[0]]

for i in range(1, len(plate)):
    added = forms[plate[i]]
    if plate[i] == plate[i - 1]:
        added -= 1
    answer *= added

print(answer)