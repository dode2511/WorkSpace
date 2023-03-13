val =int(input("valor: "))
temp = int(input("tempo de permanencia(min): "))


valMin = 1


if temp >= 30  and temp < 60 or temp < 30:
   if valMin > val:
    print("valor insuficiente ")
   elif val > valMin:
     print("pagamento efetuado, troco: ",(val - valMin))
   elif val == valMin:
     print("pagamento efetuado: ")
    
if temp >= 60  and temp < 120:
   valMin = 1.75
   if valMin > val:
    print("valor insuficiente ")
   elif val > valMin:
     print("pagamento efetuado, troco: ",(val - valMin))
   elif val == valMin:
     print("pagamento efetuado: ")
    
if temp >= 120 :
   valMin = 3
   if valMin > val:
    print("valor insuficiente ")
   elif val > valMin:
     print("pagamento efetuado, troco: ",(val - valMin))
   elif val == valMin:
     print("pagamento efetuado: ")
    
