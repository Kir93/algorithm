twelve = 'ABCDEFGHIJKL'
ten = '0123456789'
year = int(input()) - 2013

print(twelve[(year + 5)%12] + ten[(year - 1)%10])