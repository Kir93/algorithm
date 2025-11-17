symbols = {'5': 'V', '1': 'I'}
n = int(input())

five_count = n // 5
one_count = n % 5

print(symbols['5'] * five_count + symbols['1'] * one_count)