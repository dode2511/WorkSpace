contaNome = []
total = 0
print("Programa Contas do Mês – Digite ‘Fim’ para sair")
print("-------------------------------------------------")
c = 0
while(True):

 desc =input("descriacao: ")
 if  desc == "fim" or desc == "FIM":
  num = len(contaNome)
  print("numero de contas: ", num)
  print("total: ",total)
  break
 else:
  prec =int(input("valor: "))
  c += 1
  contaNome.append(desc)
  total += prec
