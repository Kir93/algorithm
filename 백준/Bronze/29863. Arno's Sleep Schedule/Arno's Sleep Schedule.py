sleep_time = int(input())
alarm_time = int(input())

if sleep_time > alarm_time:
    print(alarm_time + 24 - sleep_time)
else:
    print(alarm_time - sleep_time)