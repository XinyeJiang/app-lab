//challenge 1
baseSize=5

for i in range(baseSize):
    outPut=''
    outPut =outPut + ' ' * (baseSize - i - 1)
    outPut =outPut + '*' * (2 * i + 1)
    print(outPut)