vowel = ['a', 'i', 'u', 'e', 'o']

int(input())
s = input()

print(sum(s.count(v) for v in vowel))