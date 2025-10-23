for i in range(int(input())):
    result = ' '.join(input().split()[::-1])
    print(f'Case #{i + 1}: {result}')