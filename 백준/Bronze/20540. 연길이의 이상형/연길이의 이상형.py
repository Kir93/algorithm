mbti = input()
mbti_types = ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P']

for c in mbti:
    mbti_types.remove(c)
    
print(''.join(mbti_types))