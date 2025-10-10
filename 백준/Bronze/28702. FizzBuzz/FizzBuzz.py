for i in range(3, 0, -1):
    x = input()
    if x not in ['Fizz', 'Buzz', 'FizzBuzz']:
        n = int(x) + i

if not n % 3 and not n % 5:
    print('FizzBuzz')
elif not n % 3 and n % 5:
    print('Fizz')
elif n % 3 and not n % 5:
    print('Buzz')
else:
    print(n)