
function calcPromedio(arr){
  let sumaArr = 0;

  for (let i = 0; i < arr.length; i++){
    sumaArr = sumaArr + arr[i];
  }
  console.log(sumaArr)
  const promedio = sumaArr / arr.length;

  return console.log(promedio);
}

calcPromedio([10,10,10,10,10,9])

function unpair(arr){
  if (arr.length % 2 == 1){
    console.log(arr.length % 2)
    return console.log('no es par')
  }
  else{
    console.log(arr.length % 2)
    return console.log('Es par')
  }
}

unpair([1,1])
 
const pair = (arr) => {return !(arr.length % 2)};

function mediana(arr){
  const listaPar = pair(arr)
  if (listaPar){
    const indexMedianaLista1 = Math.floor(arr.length / 2);
    const indexMedianaLista2 = Math.floor((arr.length / 2) - 1);
    const medianaPar = ((arr[indexMedianaLista1] + arr[indexMedianaLista2]) / 2);
    console.log(medianaPar)
  } else {
    const indexMedianaLista = Math.floor(arr.length / 2);
    const medianaInpar = arr[indexMedianaLista];
    console.log(medianaInpar);
  }
}

mediana([209,5200,500]);