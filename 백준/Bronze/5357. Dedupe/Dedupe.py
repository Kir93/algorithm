for _ in range(int(input())):
    q = input()
    r = [q[0]]
    
    for c in q[1:]:
        if r[-1] != c:
            r.append(c)
    
    print(''.join(r))