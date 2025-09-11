calc, result = map(str, input().split(' = '))
a, b = calc.split(' + ')

print('YES' if int(a) + int(b) == int(result) else 'NO')