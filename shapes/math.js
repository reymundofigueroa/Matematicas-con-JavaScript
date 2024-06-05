//triangle variables
const triangleBaseInput = document.querySelector('#base');
const triangleSideAInput = document.querySelector('#sideA');
const triangleSideBInput = document.querySelector('#sideB');
const triangleHeightInput = document.querySelector('#height');
const triangleAreaSpan = document.querySelector('#triangleArea');
const trianglePerimeterSpan = document.querySelector('#trianglePerimeter');
//square variables
const squareSideInput = document.querySelector('#side');
const squareAreaSpan = document.querySelector('#squareArea');
const squarePerimeterSpan = document.querySelector('#squarePerimeter');
// global variables
const inputs = document.querySelectorAll('input[type="number"]')

function calcular(){
  function triangleArea(){
  let valueBase = parseInt(triangleBaseInput.value) || 0;
  let valueHeight = parseInt(triangleHeightInput.value) || 0;  
  let area = (valueBase * valueHeight) / 2;
  triangleAreaSpan.innerHTML = `Area = ${area}` 
  };

  function trianglePerimeter(){
  let valueBase = parseInt(triangleBaseInput.value) || 0;
  let valueSideA = parseInt(triangleSideAInput.value) || 0;
  let valueSideB = parseInt(triangleSideBInput.value) || 0;  
  let perimetro = valueBase + valueSideA + valueSideB;
  trianglePerimeterSpan.innerHTML = `Perimetro = ${perimetro}` 
  };

  function squareArea(){
    let valueSide = parseInt(squareSideInput.value) || 0;
    let area = valueSide * valueSide;
    squareAreaSpan.innerHTML = `Area = ${area}`
  };
  function squarePerimeter(){
    let valueSide = parseInt(squareSideInput.value) || 0;
    let perimetro = valueSide * 4;
    squarePerimeterSpan.innerHTML = `Perimetro = ${perimetro}`
  };

  triangleArea()
  trianglePerimeter()
  squareArea()
  squarePerimeter()
}

window.addEventListener('load', calcular);

inputs.forEach(input => {
  input.addEventListener('input', calcular)
});