// Saída 
console.log("Saída")

// Entrada
/** 
* 1. Inicializar o npm no diretório
* npm init -y
* 2.Instalar um plugin prompt-sync
* npm install prompt-sync
*3. Rodar o programa
* node <nome do arquivo js>.js
*/


/*do {
  //  console.log('');
  //  console.log('Digite os valores');
  //  console.log('');

} while (Number(comp) == 0 || Number(larg) == 0 || Number(alt) == 0 */

const prompt = require ('prompt-sync')();

 var n1 = prompt ('Digite o n1: ');
 console.log ('O usuário digitou: ', n1);

 var comp = prompt("Digite o comprimento da sala: ");
 var larg = prompt("Digite a largura da sala: ");
 var alt = prompt("Digite a altura da sala: ");

 var area = Number(comp) * Number(larg);
 var volume = Number(comp) * Number (larg) * Number (alt);

 console.log("A area é ", area);
 console.log("O volume é ",volume);
