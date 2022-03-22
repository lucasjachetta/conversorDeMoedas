//Converter dolar para real
function ConverterDolar() {
  const valorElemento = document.getElementById("valor");
  let valor = valorElemento.value;
  const valorEmDolar = parseFloat(valor);
  const valorEmReal = valorEmDolar * 4.99;
  const elementoValorConvertido = document.getElementById("valorConvertido");

  if (valor == 1) {
    const valorConvertido = `Na cotação atual ${valorEmDolar} dólar é equivalente a ${valorEmReal.toFixed(
      2
    )} reais.`;
    elementoValorConvertido.innerHTML = valorConvertido;
  } else {
    const valorConvertido = `Na cotação atual ${valorEmDolar} dólares são equivalentes a ${valorEmReal.toFixed(
      2
    )} reais.`;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}

//converter Euro para Real
function ConverterEuro() {
  const valorElemento = document.getElementById("valor");
  let valor = valorElemento.value;
  const valorEmEuro = parseFloat(valor);
  const valorEmReal = valorEmEuro * 5.53;
  const elementoValorConvertido = document.getElementById("valorConvertido");

  if (valor == 1) {
    const valorConvertido = `Na cotação atual ${valorEmEuro} euro é equivalente a ${valorEmReal.toFixed(
      2
    )} reais`;
    elementoValorConvertido.innerHTML = valorConvertido;
  } else {
    const valorConvertido = `Na cotação atual ${valorEmEuro} euros são equivalentes a ${valorEmReal.toFixed(
      2
    )} reais`;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}

//Converter Bitcoin para Real
function ConverterBitcoin() {
  const valorElemento = document.getElementById("valor");
  let valor = valorElemento.value;
  const valorEmBitcoin = parseFloat(valor);
  const valorEmReal = valorEmBitcoin * 195594.47;
  const elementoValorConvertido = document.getElementById("valorConvertido");

  if (valor == 1) {
    const valorConvertido = `Na cotação atual ${valorEmBitcoin} bitcoin é equivalente a ${valorEmReal.toFixed(
      2
    )} reais`;
    elementoValorConvertido.innerHTML = valorConvertido;
  } else {
    const valorConvertido = `Na cotação atual ${valorEmBitcoin} bitcoins são equivalentes a ${valorEmReal.toFixed(
      2
    )} reais`;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}

//Converter Real para Dolar
function ConverterRealDolar() {
  const valorElemento = document.getElementById("valor");
  let valor = valorElemento.value;
  const valorEmReal = parseFloat(valor);
  const valorEmDolar = valorEmReal / 4.99;
  const elementoValorConvertido = document.getElementById("valorConvertido");

  if (valor == 1) {
    const valorConvertido = `Na cotação atual ${valorEmReal} real é equivalente a ${valorEmDolar.toFixed(
      2
    )} dólares.`;
    elementoValorConvertido.innerHTML = valorConvertido;
  } else {
    const valorConvertido = `Na cotação atual ${valorEmReal} reais são equivalentes a ${valorEmDolar.toFixed(
      2
    )} dólares.`;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}

//converter Real para Euro
function ConverterRealEuro() {
  const valorElemento = document.getElementById("valor");
  let valor = valorElemento.value;
  const valorEmReal = parseFloat(valor);
  const valorEmEuro = valorEmReal / 5.53;
  const elementoValorConvertido = document.getElementById("valorConvertido");

  if (valor == 1) {
    const valorConvertido = `Na cotação atual ${valorEmReal} real é equivalente a ${valorEmEuro.toFixed(
      2
    )} euros`;
    elementoValorConvertido.innerHTML = valorConvertido;
  } else {
    const valorConvertido = `Na cotação atual ${valorEmReal} reais são equivalentes a ${valorEmEuro.toFixed(
      2
    )} euros`;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}

//Converter Real para Bitcoin
function ConverterRealBitcoin() {
  const valorElemento = document.getElementById("valor");
  let valor = valorElemento.value;
  const valorEmReal = parseFloat(valor);
  const valorEmBitcoin = valorEmReal / 195594.47;
  const elementoValorConvertido = document.getElementById("valorConvertido");

  if (valor == 1) {
    const valorConvertido = `Na cotação atual ${valorEmReal} real é equivalente a ${valorEmBitcoin.toFixed(
      10
    )} bitcoins`;
    elementoValorConvertido.innerHTML = valorConvertido;
  } else {
    const valorConvertido = `Na cotação atual ${valorEmReal} reais são equivalentes a  ${valorEmBitcoin.toFixed(
      10
    )} bitcoins`;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}