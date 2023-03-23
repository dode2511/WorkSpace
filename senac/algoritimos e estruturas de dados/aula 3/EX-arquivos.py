import csv

linhas = []
nomes = ""
idades = ""
cursos = ""
# abre o aruivo
with open("exercicio.txt", "r") as arq:
 arq_csv = csv.reader(arq,delimiter=";")
 writer_csv = csv.writer(arq,delimiter=";")
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
 
 print(linhas)
 log_array(nomes,linhas[0][0])
 log_array(idades,linhas[0][1])
 log_array(cursos,linhas[0][2])

 nova = []

 def incluir():
    print()
    print("-"*30)
    print("Adcinar aluno")
    print("-"*30)
    
    nome = input("Nome do Aluno: ")
    idade = input("Idade do Aluno: ")
    curso = input("Curso do Aluno: ")
    nova.append(nome)
    nova.append(idade,)
    nova.append(curso)
    writer_csv.writerow(nova)
    #writer_csv.writerow(nova)
    

 def listar():
    print()
    print("Listagem de Alunos")
    print("-"*30)
    log_array(nomes,linhas[0][0])
    log_array(idades,linhas[0][1])
    log_array(cursos,linhas[0][2])
    
 def pesquisa():
    pass

 def remover():
   pass

 def resumo():
      pass

while True:
    print("Menu")
    print("-"*30)
    print("1. Cadastrar Aluno")
    print("2. Listar Alunos")
    print("3. Pesquisa por Nome")
    print("4. Remover Aluno")
    print("5. Resumo")
    print("6. Sair")
    opcao = int(input("Opção: "))
    if opcao == 1:
        incluir()
    elif opcao == 2:
        listar()
    elif opcao == 3:
        pesquisa()
    elif opcao == 4:
        remover()
    elif opcao == 5:
        resumo()
    else:
        break
 


