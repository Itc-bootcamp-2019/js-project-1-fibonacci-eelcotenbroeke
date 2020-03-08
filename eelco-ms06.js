// fetch("https://mattandre.ws/something-that-returns-400-responses").then(
//   response => {
//     if response.ok {
//       return res.json();
//     }  {
//         throw new Error("There's an error upstream and it says " + err.message);
//       });
//     }
//   }
// );

function getFibonacci(index) {
  let serverCallIndex = index;
  if (serverCallIndex < 50) {
    let url = "http://localhost:5050/fibonacci/" + serverCallIndex;
    showLoader();
    hideResult();
    hideMol();
    hideError();
    fetch(url)
      .then(response => {
        if (response.status == 400) {
          hideResult();
          showMol();
          hideError();
          console.log(response.status);
          throw response;
        } else {
          hideMol();
          hideLoader();
          hideError();
          return response.json();
        }
      })
      .then(data => {
        hideLoader();
        hideError();
        showResult();
        document.getElementById("userOutput").innerText = data.result;
        console.log(data.result);
      })
      .catch(error => error.text())
      .then(mol => {
        hideLoader();
        hideError();
        document.getElementById("userOutputError").innerText = mol;
        console.log(mol);
      });
  } else {
    hideMol();
    hideResult();
    showError();
    document.getElementById("error").innerText = "The number cannot exceed 50";
  }
}

// fetch("/api/foo")
//   .then(response => {
//     if (!response.ok) {
//       throw response;
//     }
//     return response.json(); //we only get here if there is no error
//   })
//   .then(json => {
//     this.props.dispatch(doSomethingWithResult(json));
//   })
//   .catch(err => {
//     err.text().then(errorMessage => {
//       this.props.dispatch(displayTheError(errorMessage));
//     });
//   });

// function getFibonacci(index) {
//   let serverCallIndex = index;
//   if (serverCallIndex < 50) {
//     let url = "http://localhost:5050/fibonacci/" + serverCallIndex;
//     showLoader();
//     hideResult();
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         hideLoader();
//         hideError();
//         showResult();
//         document.getElementById("userOutput").innerText = data.result;
//         console.log(data);
//       })
//       .catch(error => console.log(error));
//   } else {
//     hideResult();
//     showError();
//     document.getElementById("error").innerText = "The number cannot exceed 50";
//   }
// }

// function getFibonacci(index) {
//   let serverCallIndex = index;
//   if (serverCallIndex < 50) {
//     let url = "http://localhost:5050/fibonacci/" + serverCallIndex;
//     showLoader();
//     hideResult();
//     fetch(url)
//       .then(response => {
//         if (response.status == 400) {
//           throw response
//       }
//         response.json()
//       .then(data => {
//         hideLoader();
//         hideError();
//         showResult();
//         document.getElementById("userOutput").innerText = data.result;
//         console.log(data);
//       })
//       .catch(error => console.log(error));
//       }
//     } else {
//     hideResult();
//     showError();
//     document.getElementById("error").innerText = "The number cannot exceed 50";
//   }
// }

function hideLoader() {
  document.getElementById("loader").style.visibility = "hidden";
}

function showLoader() {
  document.getElementById("loader").style.visibility = "visible";
}

function hideError() {
  document.getElementById("error").style.visibility = "hidden";
}

function showError() {
  document.getElementById("error").style.visibility = "visible";
}

function hideResult() {
  document.getElementById("userOutput").style.visibility = "hidden";
}

function showResult() {
  document.getElementById("userOutput").style.visibility = "visible";
}

function hideMol() {
  document.getElementById("userOutputError").style.visibility = "hidden";
}
function showMol() {
  document.getElementById("userOutputError").style.visibility = "visible";
}
