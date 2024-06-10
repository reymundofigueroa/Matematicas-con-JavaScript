// Calcular promedio

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

// Par o inpar

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
 
// Mediana de un arreglo 

const pair = (arr) => {return !(arr.length % 2)};

function mediana(unsortedList){
  const lista = sortList(unsortedList)
  const listaPar = pair(lista)
  if (listaPar){
    const indexMedianaLista1 = Math.floor(lista.length / 2);
    const indexMedianaLista2 = Math.floor((lista.length / 2) - 1);
    const medianaPar = ((lista[indexMedianaLista1] + lista[indexMedianaLista2]) / 2);
    console.log(medianaPar)
  } else {
    const indexMedianaLista = Math.floor(lista.length / 2);
    const medianaInpar = lista[indexMedianaLista];
    console.log(medianaInpar);
  }
}

mediana([209,5200,500,111]);

// Ordenamiento sort
function sortList (unsortedList){
  const list = unsortedList.sort(ListaSort = (acumulatedValue, currentValue) => acumulatedValue - currentValue);
  return list;
};

console.log(sortList([10,20,1,2,3,50]));