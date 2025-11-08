cards = dict()

for _ in range(int(input())):
    card, number = map(str, input().strip().split())
    if card in cards:
        cards[card] += int(number)
    else:
        cards[card] = int(number)

for num in cards.values():
    if num == 5:
        print("YES")
        break
else:
    print("NO")