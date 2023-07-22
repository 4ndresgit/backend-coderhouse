

function mostrarLista(lista) {
    if (lista.length > 0) {
      lista.forEach(function(elemento) {
        console.log(elemento);
      });
    } else {
      console.log("Lista vacía");
    }
  }
  

(function (lista) {
    if (lista.length ===0) {
        console.log('LIsta vacia')
    } else {

    }

})([4,5,6])

function crearmultiplicador(num1) {

    return function (num2) {
        console.log('num2', num2)
        return num1 * num2
    }
}