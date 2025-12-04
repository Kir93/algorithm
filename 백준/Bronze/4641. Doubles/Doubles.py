while True:
    cnt = 0
    ls = list(map(int, input().split()))

    if ls[0] == -1:
        break
    for n in ls:
        for m in ls:
            if n == m:
                continue
            if n * 2 == m:
                cnt += 1
                break
    print(cnt)