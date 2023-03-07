valor = int(input("Valor da compra: "))
c = 1
parcelas = 21
while True:

 if parcelas <= 20:
    print("Pode pagar em ",c, "de R$:",parcelas)
    print('oi')
    break
 elif c >= 6:
    print("Pode pagar em ",c, "de R$:",parcelas)
    print('ola')
    break
 parcelas = valor /c
 c = c + 1

