pessoas = int(input("Nº Pessoas: "))
peixes = int(input("Nº Peixes: "))


if pessoas < peixes:
    pagar = pessoas * 20  + ((peixes - pessoas) * 12)

    print("Pagar: R$",pagar, ", voce pescou",(pessoas-peixes),"a mais do que poderia")
else:
  pagar = pessoas * 20 
  print("Pagar: ",pagar)


 