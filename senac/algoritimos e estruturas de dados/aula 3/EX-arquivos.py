import csv

linhas = []
nomes = ""
idades = ""
cursos = ""
# abre o aruivo
with open("exercicio.txt", "r") as arq:
 arq_csv = csv.reader(arq,delimiter=";")
    # mostra os itens ja no arquivo

 for  line in arq_csv:
   linhas.append(line)
 lenght = len(linhas)
 for c in range(1,lenght) :
   nomes += linhas[c][0] + " "
   idades += linhas[c][1] + " "
   cursos += linhas[c][2] + " "


 def log_array(str,idex):
   arr = str.split()
   compri = len(arr)
   print(f"------\n{idex}\n--------")
   for c in range(compri):
     print(arr[c])
 
 log_array(nomes,linhas[0][0])
 log_array(idades,linhas[0][1])
 log_array(cursos,linhas[0][2])
 


