// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listasDeAmigos = document.getElementById('listaAmigos');
let inputAmigo = document.getElementById('amigo');
let resultadoSorteo = document.getElementById('resultado');
let cadenaNombres = [];

inputAmigo.focus();

function asignarTextoElmento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarNombres(){
    
    let nombre = inputAmigo.value.trim().toUpperCase();

if (nombre !== '') {
   resultadoSorteo.innerHTML = '';
    if (cadenaNombres.includes(nombre))
    {
        alert ('¡Este nombre ya existe!')
    }
    else{
    cadenaNombres.push(nombre); // Agregar el nombre al array
        let listasN = document.createElement('li');
        listasN.textContent = nombre;
        listasDeAmigos.appendChild(listasN); // Agregar el nombre a la lista <li>
        inputAmigo.value = ''; // Limpiar el campo de entrada
    }
 } else {
            alert('Por favor, ingresa un nombre válido.');
        }
    //Verificar si ya se alzanzo los 10 nombres
if (cadenaNombres.length >= 10){
    alert ('Ya ha alcazando el limite de 10 nombres')
    return;
    }
    
  }

function sortearAmigo() {

   // listasDeAmigos = document.querySelectorAll("#listaAmigos li")
    if (cadenaNombres.length > 1) {
        let nombreAleatorio = Math.floor(Math.random() * cadenaNombres.length);
        let nombreGanador = cadenaNombres[nombreAleatorio];
        resultadoSorteo = document.getElementById('resultado');
        resultadoSorteo.textContent = `¡El amigo sorteado es: ${nombreGanador}!`;
        listasDeAmigos.innerHTML = ''; // Limpiar la lista <ul>
        cadenaNombres = []; // Vaciar
        
        } else {
            if (cadenaNombres.length === 0)
            {
        asignarTextoElmento ('#resultado', `La lista de amigos esta vacia` );
            }
            else{
                asignarTextoElmento ('#resultado', `se necesita mas de 1 amigo para inicar el juego` ); 
            }
        }
   
   
    
}
//insertar los nombre con la tecla enter
inputAmigo.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Verificar si la tecla presionada es "Enter"
        agregarNombres(); // Llamar a la función para agregar el nombre
    }
});




