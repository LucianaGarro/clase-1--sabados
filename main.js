//¿Cómo empezamos a trabajar JS en nuestro proyecto web? SIEMPRE vamos a trabajar JS vinculado a un archivo html
//Hay dos formas:
//crear un archivo main.js y vincularlo al html con la etiqueta script:src. Siempre el scrip lo colocamos al final de nuestro html. 
//colocando un script e insertando el código allí.

//Sintaxis del código. 
//1)Recorda que la computadora lee el código de arriba hacia abajo. 
//2 En JS podemos incluir comentarios de dos maneras:
    /* comentario en bloque */ 
    //comentario en línea 

//3) En js NO se tienen en cuenta los espacios en blanco (si lo tiene en cuenta para los nombres de las variables)
//4) case sensitive: distingue entre mayúsculas y minúsculas. 
    // let estoEsUnEjemplo
    // let estoesunejemplo (NO LO HAGAN, SEAN PIADOSOS, NO ES UNA BUENA PRÁCTICA)

//5) podemo terminar las líneas de código sin " ;" pero es recomendado siempre hacerlo.
//6) Hay palabras que son de tipo "reservadas" y no las puedo usar como nombres de variables, objetos, funciones, etc (porque son palabras reservadas del lenjuage)

//Tipos de datos: en primer lugar vamos a ver tipos de datos primitivos.
//15425 => number => lo voy a utilizar en operaciones matemáticas o cuando necesite una numeración
//"Este es un tipo de dato string" => siempre va a siempre entre comillas dobles o simples. Es una cadena de carácteres

//true/false => booleano, puede tomar solamente estos dos valores (lo vamos a ver principalmente en condicionales)

//null (nulo) 

//undefined => es cuando un valor no está definido

//Variables: son espacios de memoria que reservamos para almacenar información importante durante la ejecución del programa. 

//¿Cómo las declaro?
//let 1234alumno =  ESTO NO ES CORRECTO. LA VARIABLE NO PUEDE EMPEZAR CON UN NÚMERO
//let nombre alumnos= ESTO TAMPOCO ES CORRECTO PORQUE NO PUEDE HABER ESPACIOS ENTRE EL NOMBRE DE LA VARIABLE SI TENGO MÁS DE UNA PALABRA. 
//PARA EL NOMBRE DE LA VARIABLE, SE ADMITE LA Ñ, PERO NO ES RECOMENDABLE. 
// la forma correcta  let nombreAlumno o let nombre

//¿Qué falta? Asignarle un valor. 

//Asignamos valores por medio de un operador de asignación "=" e inicializamos la varible

let nombreAlumno = "Luciana";
console.log(nombreAlumno);

//¿puedo cambiar el nombre de esta variable? SI, js me lo permite porque estoy usando la palabra reservada "let". Lo reasigno con el nombre de la variable (sin let)

nombreAlumno = 1234;
console.log(nombreAlumno);

//declaración de variable con booleanos. 
let cansancio = false;
console.log(cansancio);

//Constantes
//No es lo mismo declarar una variable con "let" que con "const"

//La constante recibe un ÚNICO valor de asignación y declaración, impidiendo que su valor luego pueda modificarse. 

//const va a ser usada para datos que no voy a modificar luego. 

//const pi; //No puedo hacer esto, no puedo asignar una constante sin declarar un valor porque luego no le voy a poder reasignar un valor. 

//La declaro e inmediatamente le asigno un valor. 
const pi = 3.1494547578; //ATENCIÓN: EN JS SI QUIERO USAR DECIMALES TENGO QUE USAR PUNTO (.) Y NO (,) 

//const pi = "luciana"; si hago esto tira error (me dice que ya lo declaré)

//En js las const las constantes las escribimos en minúsculas. 

//Ejemplos donde me serviría const: un dni, fecha de nacimiento, Iva.

//Cálculo de promedio de notas. 
//let ingreseNombre = prompt ("Ingrese su nombre");
//let notaPrimerParcial = prompt ("Ingrese la nota de su primer parcial");
//let notaSegundoParcial = prompt ("Ingrese la nota de su segundo parcial");
//concatenar un mensaje con string y variables.
//console.log("El alumno: " + ingreseNombre + " ha sacado en su primer parcial: " + notaPrimerParcial + " y en su segundo parcial ha sacado: " + notaSegundoParcial);

//prompt devuelve un string si le doy aceptar y si le doy cancelar devuelve null.
// con prompt recibo el string. 
//Si yo necesito calcular un promedio, necesito un tipo de dato number. Como prompt me devuelve un string, no podría hacerlo. Necesito que ese dato que ingresa el usuario se transforme en un dato de tipo number. 

//para transformar el tipo de dato voy a realizar un parse INT (entero) o float (decimales)
let ingreseNombre = prompt ("Ingrese su nombre");
let notaPrimerParcial =parseFloat( prompt ("Ingrese la nota de su primer parcial"));
let notaSegundoParcial =parseFloat(prompt ("Ingrese la nota de su segundo parcial"));

console.log("El alumno: " + ingreseNombre + " ha sacado en su primer parcial: " + notaPrimerParcial + " y en su segundo parcial ha sacado: " + notaSegundoParcial);

//Cuando uso parseInt o parseFloat recibo un string y lo convierto en number, almacenandolo en la variable, permitiendome luego realizar una operación. 

//Resolución:

let notaPromedio = (notaPrimerParcial + notaSegundoParcial) / 2;
console.log("El promedio de las nota del alumno " + ingreseNombre + " es " + notaPromedio);

//alert: me muestra un mensaje tipo pop up que sale para el usuario, pero no da opciones de interacción.

alert("me quiero ir a dormir la siesta");




