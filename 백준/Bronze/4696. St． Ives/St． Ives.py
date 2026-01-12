while True:
    r = 0
    n = float(input())
    if n == 0:
        break
    
    for i in range(5):
        r += n ** i
    
    print(f"{r:.2f}")