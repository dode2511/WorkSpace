import 'dart:io';
List<String> arr = ["red dead redempion 2"];

 void lista(){
  print("ola");
  for (int c=0; c < arr.length;c++){
  print("${c+1}.${arr[c]}");

  } 
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
    print('ola');
      //cad();
      break;
      
    case "3" :
     // excluir();
      break;
      
    case "4" :
     // procurar();
      break;
      


   }
 




 }


}


 
