a = int(input())
x = int(input())
b = int(input())
y = int(input())
t = int(input())

r_a = a + max(t - 30, 0) * x * 21
r_b = b + max(t - 45, 0) * y * 21

print(r_a, r_b)