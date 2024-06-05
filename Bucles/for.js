console.log("iniciando");

//========================FOR==========================
/*
palabraClave (creación de la variable; condicion; pasos ){
  //codigo que se ejecuta
} 
 */

//                     true
// for (let index = 1; index <= 12; index++) {
//   console.log(index); //solo se ejecuta si la condicion es true
// }

/*
#
##
###
####
#####
######
#######
########
*/

// for (let i = 1; i < 10; i++) {
//   console.log("#".repeat(i));
// }

/*
        #
       ##
      ###
     ####
    #####
   ######
  #######
 ########
*/

/* 
let totalLines = 10;
for (let i = 1; i <= totalLines; i++) {
  let line = " ".repeat(totalLines - i) + "#".repeat(i);
  console.log(line);
}
*/

/* 
let y = 12;
for (let index = y; index >= 1; index--) {
  a = "";
  for (let j = index; j >= 1; j--) {
    a = a + " ";
  }
  for (let k = y - index; k >= 1; k--) {
    a = a + "#";
  }
  console.log(a);
}
*/

/*
const nombre = prompt("Cual es tu nombre");
const apellido = prompt("Cual es tu apellido");

let nombreCompleto = nombre.toUpperCase() + " " + apellido.toUpperCase();

let result = "";
const arrayName = nombreCompleto.split(" "); //convierte el string a array
result = arrayName[0][0] + arrayName[1][0];
console.log(result);
 */
