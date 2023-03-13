val =int(input("Altura da arvore: "))
arvore = []
crc = "*"

c = 2

for i in range(val): 
 arvore.append(i+2)

 print(crc * c)
 c = c + 2
 
