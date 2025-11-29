A = int(input(), 2)
B = int(input(), 2)

fill_num = 100000
mask = 2 ** fill_num - 1

print(bin(A & B)[2:].zfill(fill_num))
print(bin(A | B)[2:].zfill(fill_num))
print(bin(A ^ B)[2:].zfill(fill_num))
print(bin(A ^ mask)[2:].zfill(fill_num))
print(bin(B ^ mask)[2:].zfill(fill_num))