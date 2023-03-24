import 'dart:io';



 //cad(){
  //for (int c=0; c < arr.length;c++){

 // } 
//}
// excluir(){
//  for (int c=0; c < arr.length;c++){

 // } 
//// }
// procurar(){
 // for (int c=0; c < arr.length;c++){

 // } 
//}



void main() {
List<String?> arr = ["red dead redempion 2",];


 void lisa(){
  for (int c=0; c > arr.length;c++){
  print("${c+1}.${arr[c]}");

  } 
}
  

 while(true){
  print("-" *30);
  print("Cadastrar jogo");
  print("1. Listar Jogo");
  print("2. Adicinar Jogo");
  print("3. Excluir jogo");
  print("4. Procurar por Nome");
  print("5. Sair");
  print(': ');

  String? select = stdin.readLineSync();
   if(select == null){
     print("algo deu errado ");
      break;
   }

 if(select == "5"){
  break;
 }
   switch(select){

    case "1" :
      lisa();
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


 
