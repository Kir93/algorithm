limit = int(input())
speed = int(input())
fee = 0
if speed <= limit:
    fee = 0
elif speed - limit <= 20:
    fee = 100
elif speed - limit <= 30:
    fee = 270
else:
    fee = 500

print('Congratulations, you are within the speed limit!' if fee == 0 else f'You are speeding and your fine is ${fee}.')