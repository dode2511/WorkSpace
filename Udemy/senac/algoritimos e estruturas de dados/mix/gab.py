from bs4 import BeautifulSoup
import requests
from tabulate import tabulate

produto = input("Produto: ")
url_shoptime = "https://www.shoptime.com.br/busca/" + produto 

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
}

pagina_shoptime = requests.get(url_shoptime, headers=headers)
html_shoptime = BeautifulSoup(pagina_shoptime.content, "html.parser")

div_produtos_shoptime = html_shoptime.find("div", class_="grid__StyledGrid-sc-1man2hx-0 iFeuoP src__GridItem-sc-1yqw8tm-0 vzhXK")
produtos_shoptime = div_produtos_shoptime.find_all("h3", class_="product-name__Name-sc-1shovj0-0 htEpFr")
descontos_shoptime = div_produtos_shoptime.find_all("span", class_="src__Text-sc-154pg0p-0 price__Price-sc-h6xgft-0 JbUli")
preco_shoptime = div_produtos_shoptime.find_all("span", class_="src__Text-sc-154pg0p-0 price__PromotionalPrice-sc-h6xgft-1 ctBJlj price-info__ListPriceWithMargin-sc-1xm1xzb-2 liXDNM")



produtos_com_desconto = []

for i in range(len(produtos_shoptime)):
    titulo = produtos_shoptime[i].get_text().strip()
    preco = preco_shoptime[i].get_text().strip()
    desconto = descontos_shoptime[i].get_text().strip() if i < len(descontos_shoptime) else "Sem desconto"
    produtos_com_desconto.append({"titulo": titulo, "desconto": desconto, "preco": preco})


def lista_shoptime():
    titulo("Produtos na Shoptime")
    table_data = []
    headers = ["Nome do produto", "Valor sem Desconto", "Valor com Desconto"]

    for produto in produtos_com_desconto:
        tituloo = produto['titulo']
        desconto = produto['desconto']
        preco = produto['preco']
        table_data.append([tituloo, desconto, preco])

    print(tabulate(table_data, headers, tablefmt="grid"))





url_magalu = "https://www.magazineluiza.com.br/busca/" + produto

headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }

pagina_magalu = requests.get(url_magalu, headers=headers)
html_magalu = BeautifulSoup(pagina_magalu.content, "html.parser")
div_produtos_magalu = html_magalu.find("div", class_="sc-fqkvVR sPxxI sc-APcvf feaSJL")

produtos_magalu = div_produtos_magalu.find_all("h2", class_="sc-ZEldx llMBjh")
desconto_magalu = div_produtos_magalu.find_all("p", class_="sc-kpDqfm efxPhd sc-fUBkdm hrUkqj")
preco_magalu = div_produtos_magalu.find_all("p", class_="sc-kpDqfm eCPtRw sc-hBtRBD fPPQXa")


produtos = []
descontos_m = []
precos_m = []



for h2 in  produtos_magalu:
        produtos.append({"titulo": h2.get_text().strip()})

for p in desconto_magalu:
        descontos_m.append({"desconto": p.get_text().strip()})

for p in preco_magalu:
        precos_m.append({"preco": p.get_text().strip()})

produtos_com_desconto2 = []

for i in range(len(produtos)):
        titulo = produtos[i]["titulo"]
        if i < len(descontos_m):
            desconto = descontos_m[i]["desconto"]
        else:
            desconto = "Sem desconto"
        preco = precos_m[i]["preco"]
        produtos_com_desconto2.append({"titulo": titulo, "desconto": desconto, "preco": preco})




def titulo(msg, traco="-"):
    print()
    print(msg)
    print(traco*50)

produtos_com_desconto_total = produtos_com_desconto + produtos_com_desconto2



def lista_magalu():
    titulo(f"Produtos em Magazine Luiza")

    table_data = []
    headers = ["Nome do produto", "Valor sem Desconto", "Valor com Desconto"]

    for produto in produtos_com_desconto2:
        tituloo = produto['titulo']
        desconto = produto['desconto']
        preco = produto['preco']
        table_data.append([tituloo, desconto, preco])

    print(tabulate(table_data, headers, tablefmt="grid"))
   
def lista_todos():
    # declara um conjunto (não aceita duplicações)
    todos = set()     

    for produtos in produtos_com_desconto:
        todos.add(produtos['titulo'])

    for produtos in produtos_com_desconto2:
        todos.add(produtos['titulo'])

    # print(todos)
    
    # converte set (que não mantém ordem) em lista (que mantém)
    lista = list(todos)

    # classifica em ordem a lista
    lista2 = sorted(lista)

    titulo(f"Todos os {produto} desejados")

    for produtos in lista2:
        print(produtos)

def apenas_magalu():
    # declara dois conjuntos (para obter diferença)
    set_shoptime = set()     
    set_magalu = set()

    for produtos in produtos_com_desconto:
        set_magalu.add(produtos['titulo'])

    for produtos in produtos_com_desconto2:
        set_shoptime.add(produtos['titulo'])

    em_magalu = set_magalu.difference(set_shoptime)

    titulo("Produtos em Magazine Luiza apenas")

    if len(em_magalu) == 0:
        print("Obs.: * Não há produtos em Magaine Luiza")
    else:
        for produtos in em_magalu:
            print(produtos)


def apenas_shoptime():
    # declara dois conjuntos (para obter diferença)
    set_shoptime = set()     
    set_magalu = set()

    for produtos in produtos_com_desconto2:
        set_magalu.add(produtos['titulo'])

    for produtos in produtos_com_desconto:
        set_shoptime.add(produtos['titulo'])

    em_shoptime = set_shoptime.difference(set_magalu)

    titulo("Produtos em Shoptime apenas")

    if len(em_shoptime) == 0:
        print("Obs.: * Não há produtos em Shoptime")
    else:
        for produtos in em_shoptime:
            print(produtos)


def lista_comuns():
    # declara dos conjuntos (para obter a intersecção)
    set_shoptime = set()     
    set_magalu = set()

    for produtos in produtos_com_desconto:
        set_shoptime.add(produtos['titulo'])

    for produtos in produtos_com_desconto2:
        set_magalu.add(produtos['titulo'])

    comuns = set_shoptime.intersection(set_magalu)

    titulo("Produtos disponiveis em ambos os sites")

    if len(comuns) == 0:
        print("Obs.: * Não há produtos comuns aos dois sites")
    else:
        for produtos in comuns:
            print(produtos)


def totalizacao_precos():
    total_preco = 0  # Variável para acumular a totalização dos preços

    for produto in produtos_com_desconto_total:
        preco = produto['preco']
        preco_numerico = float(preco.replace("R$", "").replace(",", "."))  # Converte o preço para um valor numérico

        total_preco += preco_numerico

    titulo("Totalização de preços Magazine Luiza e Shoptime")
    print("Total de Preços: R$", total_preco)


def agrupar_sem_desconto():
    dicionario = {}
    for produto in produtos_com_desconto_total:
        if produto["desconto"] == "Sem desconto":
            # busca a palavra (chave). Se não existir: None
            chave = dicionario.get(produto["desconto"], None)
            if chave == None:
                # não existe, adiciona com o nome do jogador
                dicionario[produto["desconto"]] = produto["titulo"]
            else:
                # se existe, adiciona mais ", " e o nome deste jogador
                dicionario[produto["desconto"]] = chave + ", " + produto["titulo"]

    ordenados = sorted(dicionario.items(), key=lambda c : c[0])
    
    # para obter chave e valor
    for (desconto, titulo) in ordenados:
        print(f"{desconto}: {titulo}")

def preco_maximo():
    valor_maximo = float(input("Valor máximo: "))
    produtos = []

    for produto in produtos_com_desconto_total:
        preco = float(produto["preco"].replace("R$", "").replace(".", "").replace(",", "."))

        if preco <= valor_maximo:
            produtos.append(produto)

    if len(produtos) == 0:
        print("Nenhum produto encontrado dentro do valor máximo.")
    else:
        print(f"Produtos com preço até R${valor_maximo:.2f}:")
        for produto in produtos:
            print(f"Produto: {produto['titulo']}")
            print(f" Preço com desconto: {produto['preco']}")
            print()






while True:
    titulo("Produtos")    
    print("1. Shoptime")
    print("2. Magazine Luiza")
    print("3. Todos os produtos")
    print("4. Apenas em Shoptime")
    print("5. Apenas em Magazine Luiza")
    print("6. Comuns nos dois sites")
    print("7. Total de preços nos dois sites")    
    print("8. Produtos sem deconto")    
    print("9. Pesquisa produtos por valor")    
    opcao = int(input("Opção: "))
    if opcao == 1:
        lista_shoptime()
    elif opcao == 2:
        lista_magalu()
    elif opcao == 3:
        lista_todos()
    elif opcao == 4:
        apenas_shoptime()
    elif opcao == 5:
        apenas_magalu()
    elif opcao == 6:
        lista_comuns()
    elif opcao == 7:
        totalizacao_precos()
    elif opcao == 8:
        agrupar_sem_desconto()
    elif opcao == 9:
        preco_maximo()
    else:
        break