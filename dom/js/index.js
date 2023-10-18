const titulo = document.getElementById('saludo');

titulo.innerText = "HOLA COMISION 23546";

titulo.style.color = "red";


// Obtenemos las etiquetas a modificar o generar eventos
const inputText = document.getElementById('inputText');
const submitButton = document.getElementById("submitButton");
const elementList = document.getElementById('elementList');

// Agregarle un evento al botón para manejar la entrada de datos a la lista

submitButton.addEventListener("click", () => {
    // Obtener el dato del usuario puesto en el input
    const newElement= inputText.value;

    // Validar que el usuario haya escrito algo
    if (newElement) {
        // Creamos el li para agregarselo al ul del html
        const newItem = document.createElement('li');
        // Le escribimos dentro del li el texto que haya escrito el usuario
        newItem.textContent = newElement;

        // Agregamos el elemento nuevo a la lista
        elementList.appendChild(newItem);

        // Limpiamos el input
        inputText.value = "";
    }
})