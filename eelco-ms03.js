function fibonacci(index) {
  let firstnum = 0;
  let secondnum = 1;
  let result;

  for (let i = 1; i < index; i++) {
    result = firstnum + secondnum;
    firstnum = secondnum;
    secondnum = result;
  }
  return result;
}

let index = 6;
let output = fibonacci(index);

document.getElementById("num1").innerText = index;
document.getElementById("num2").innerText = output;

function buttonClick() {
  document.getElementById("");
}
