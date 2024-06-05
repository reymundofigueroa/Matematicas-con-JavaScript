const btn = document.querySelector('#calcular');
const inputCoupon = document.querySelector('#coupon')
const inputPrice = document.querySelector('#price')
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

const couponObj = {
  'cupon1': 10,
  'cupon2': 20,
  'cupon3': 30
}

function calcularPrecioConDescuento(){
  let coupon = inputCoupon.value;
  let price = inputPrice.value;

  if(!coupon || !price){
  pResult.innerHTML = `Ingresa los datos antes de calcular`;
  return;
  }

  let discount;

  if(couponObj[coupon]){
    discount = couponObj[coupon];
    }
  else{
    pResult.innerHTML = `El cupón no es valido`;
  return;
  }

  const newPrice = (price * (100 - discount) / 100)

  pResult.innerHTML = `el precio con descuento es: $${newPrice}`
}