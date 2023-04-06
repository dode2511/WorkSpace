import 'dart:io';

void main() {

String? inputString = stdin.readLineSync();
if (inputString != null && inputString.isNotEmpty) {
  List<String> input = inputString.split(" ");
  int line1 = int.parse(input[0]);
  int line2 = int.parse(input[1]);
  int line3 = int.parse(input[2]);
  double result = line1 / (line2 + line3);
  print(result);
}
}