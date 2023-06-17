//dolar, euro

//dolar oficial o dolar blue

function seleccionaMoneda() {
  const moneda = prompt(`Selecciona un tipo de divisa:
    - dolar
    - euro
    `);

  return moneda;
}

function seleccionMonto(monto) {
  //IsNaN retorna un buleano dependiendo si es un numero o no
  if (isNaN(monto)) {
    alert("El numero es invalido");
    return;
  }
  return monto;
}

function tipoDeDolar(tipoDolar) {
    let res;
  switch (tipoDolar) {
    case "dolar-blue":
      const montoBlue = seleccionMonto(Number(prompt("Escribe el monto")));
      alert("El valor a peso es de: " + montoBlue * 492);
      res = montoBlue * 492 
      break;
    case "dolar-oficial":
      const montoOf = seleccionMonto(Number(prompt("Escribe el monto")));
      alert("El valor a peso es de: " + montoOf * 260);
      res = montoOf * 260 
      break;
    default:
      alert("No seleccionas un dolar valido");
      break;
  }

  return res
}

function cuotas(q){
    let cuotas = ''
    for(let i = 0; i< q; i++){
        cuotas = cuotas.concat(i+1+", ")
    }
    return cuotas
}


function manejoDivisa() {
  const divisa = seleccionaMoneda();
  switch (divisa) {
    case "dolar":
      const eleccionDolar = prompt(
        "Selecciona el tipo de dolar\n" + "- dolar-blue\n" + "- dolar-oficial"
      );
      const resultado = tipoDeDolar(eleccionDolar);
      if(resultado === undefined){
        return
      }
      const montoAPagar = prompt("El total es de: " + resultado +". Cantidad de cuotas disponibles: " + cuotas(6) +" elige la cuota:")
      alert("El valor de la primer cuota es de: " + resultado / Number(montoAPagar))
      break
    case "euro":
      const monto = seleccionMonto(Number(prompt("Escribe el monto")));
      alert("El valor a peso es de: " + monto * 273);
    default:
      alert("Selecciona un a de las dos opciones");
  }
}

manejoDivisa()