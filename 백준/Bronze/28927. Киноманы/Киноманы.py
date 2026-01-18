T1, E1, F1 = map(int,input().split())
T2, E2, F2 = map(int,input().split())

Max = (3 * T1) + (20 * E1) + (120 * F1)
Mel = (3 * T2) + (20 * E2) + (120 * F2)

if Max > Mel :
    print("Max")
elif Max < Mel :
    print("Mel")
elif Max == Mel :
    print("Draw")