const a = prompt("Ingrese un número");
const b = prompt("Ingrese otro número");
const operacion = prompt(
  "Ingrese la operación que desea realizar: suma, resta, multiplicacion o division"
);
const resultados = {};
const suma = parseInt(a) + parseInt(b);
const resta = parseInt(a) - parseInt(b);
const multiplicacion = parseInt(a) * parseInt(b);
const division = parseInt(a) / parseInt(b);
if (operacion === "suma") {
  alert(`El resultado de la suma es ${suma}`);
} else if (operacion === "resta") {
  alert(`El resultado de la resta es ${resta}`);
} else if (operacion === "multiplicacion") {
  alert(`El resultado de la multiplicación es ${multiplicacion}`);
} else if (operacion === "division") {
  alert(`El resultado de la división es ${division}`);
} else {
  alert("La operación ingresada no es válida");
}

console.log(resultados);
