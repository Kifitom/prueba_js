alert ("Esta pagina esta en modo beta, por lo que tendra muchos errores ")

let Animes = 20
   if (Animes <= 20 ) {
alert ("Eres otaku")

   }
   else {
alert ("No eres otaku")

   }


      
function enviardatos () {

   let genero = document.getElementById("genero").value
   let nombre = document.getElementById("nombre").value
   let edad = document.getElementById("edad").value

   if (edad >=10 ) {
      alert("Bienvenido señor " + nombre + " debido a que usted es mayor de 10 (su edad es: " + edad + ") ya puede manejar dinero, por lo tanto puede proseguir :) ")
   } else {
      alert("Bienvenido Joven "+ nombre + " debido a que usted es menor de 10 (su edad es: " + edad + ") no puede proseguir , lo sentimos :(")
   }

   if (edad <10){
      alert("Cuando tengas la edad necesaria puedes volver ;)")
   }else {
      if (genero == "Hombre") {
      alert("Debido a que es hombre, procedere a cobrarle 45.000 $ ")


   } else {
      alert("Debido a que es mujer, procedere a cobrarle 25.000 $ ")
   }
 } 
} 



