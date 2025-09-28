for i in range(1000, 10000):
    sixteen = twelve = ten = i
    sixteenSum = twelveSum = tenSum = 0
    while sixteen != 0:
        sixteenSum += sixteen % 16
        sixteen //= 16
    while twelve != 0:
        twelveSum += twelve % 12
        twelve //= 12
    while ten != 0:
        tenSum += ten % 10
        ten //= 10
    
    if sixteenSum == twelveSum == tenSum:
        print(i)