import 'dart:io';
List<String> arr = ["red dead redempion 2","god of war"];

 void lista(){
  for (int c=0; c < arr.length;c++){
  print("${c+1}.${arr[c]}");

  } 
}
 void cadastrar(){
   print("-" *30);
   print("informe o nome do jogo");
   var nome = stdin.readLineSync();
   if(nome == null || nome.runtimeType != String){
    print("Errp informe o nome corretamente ");
     return;
   }
   arr.add(nome);
   print("jogo cadastrado com sucesso ");

  } 
 void excluir(){
   print("-" *30);
   print("informe o nome do jogo que deseja excluir");
   var nome = stdin.readLineSync();
   if(nome == null || nome.runtimeType != String){
    print("Errp informe o nome corretamente ");
     return;
   }
     for (int i = 0; i > arr.length;i++){
      if(arr[i] == nome){
        arr.removeAt(i);
        print("jogo removido com sucesso $nome");
      }
     }
  

  } 

void procurar(){
  
}

void main() {


 while(true){
  print("-" *30);
  print("Cadastrar jogo");
  print("1. Listar Jogo");
  print("2. Adicinar Jogo");
  print("3. Excluir jogo");
  print("4. Procurar por Nome");
  print("5. Sair");
  print(': ');

  var select = stdin.readLineSync();
   print("-" *30);
   if(select == null){
    print("algo deu errado ");
     break;
   }
  

 if(select == "5"){
  break;
 }
   switch(select){

    case "1" :
      lista();
      break;
      
    case "2" :
      cadastrar();
      break;
      
    case "3" :
     excluir();
      break;
      
    case "4" :
     procurar();
      break;
      


   }
 




 }


}


 
