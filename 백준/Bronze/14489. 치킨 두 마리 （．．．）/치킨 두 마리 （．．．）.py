balance = sum(map(int, input().split()))
c = int(input())
print(balance - c * 2 if balance >= c * 2 else balance)