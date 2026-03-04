for T in range(int(input())):
    H, W = map(int, input().split())
    grill = list()
    for _ in range(H):
        grill.append(input())

    for now_grill in grill:
        print(now_grill[::-1])