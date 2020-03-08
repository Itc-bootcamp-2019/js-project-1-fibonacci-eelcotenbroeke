// function fibonacci1(index) {
//   let firstnum = 0;
//   let secondnum = 1;
//   let result;

//   for (let i = 1; i < index; i++) {
//     result = firstnum + secondnum;
//     firstnum = secondnum;
//     secondnum = result;
//   }
//   document.getElementById("userOutput").innerText = result;
// }

function fibonacci(index) {
  let firstnum = 0;
  let secondnum = 1;
  let result;
  if (index <= 50) {
    for (let i = 1; i <= index; i++) {
      result = firstnum + secondnum;
      firstnum = secondnum;
      secondnum = result;
    }
  } else {
    document.getElementById("error").innerHTML = "The number cannot exceed 50";
    // document.getElementById("error").style.display = "none";
  }
  document.getElementById("userOutput").innerText = result;
  // document.getElementById("error").style.display = "visible";
  console.log(firstnum);
  console.log(secondnum);
  console.log(result);
}

// breakdown of actions

// is the script loaded without errors //OK
// is the button click recorded //OK
// is the value input recorded //OK
// is the value input passed to the index variable //OK
// is index passed to the function //OK
// is the function executing correctly  //OK
// is the function passing the result to the output variable
// is the output variable passing to the html
