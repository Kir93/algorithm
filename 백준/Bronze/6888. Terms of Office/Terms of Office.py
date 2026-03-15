start = int(input())
end = int(input())

cnt = (end - start) // 60

for i in range(cnt + 1):
    print(f'All positions change in year {start + i * 60}')