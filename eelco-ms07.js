function getFibonacci(index) {
  let serverCallIndex = index;
  if (serverCallIndex < 50) {
    let fibUrl = "http://localhost:5050/fibonacci/" + serverCallIndex;
    document.getElementById("historyList").innerHTML = "";
    presentHistoryList();
    showLoader1();
    hideResult();
    hideMol();
    hideError();
    fetch(fibUrl)
      .then(response => {
        if (response.status == 400) {
          hideResult();
          showMol();
          hideError();
          throw response;
        } else {
          hideMol();
          hideLoader1();
          hideError();
          return response.json();
        }
      })
      .then(data => {
        hideLoader1();
        hideError();
        showResult();
        document.getElementById("userOutput").innerText = data.result;
      })
      .catch(error => error.text())
      .then(mol => {
        hideLoader1();
        hideError();
        document.getElementById("userOutputError").innerText = mol;
      });
  } else {
    hideMol();
    hideResult();
    showError();
    document.getElementById("error").innerText = "The number cannot exceed 50";
  }
}

function presentHistoryList() {
  let resUrl = "http://localhost:5050/getFibonacciResults";
  fetch(resUrl)
    .then(response => response.json())
    .then(data => {
      let resultList = data.results;
      console.log(resultList);
      let ul = document.createElement("ul");
      ul.style.listStyle = "none";
      for (let i = 0; i < resultList.length; i++) {
        let nums = resultList[i].number;
        console.log(typeof nums);
        let res = resultList[i].result;
        let datestamp = resultList[i].createdDate;
        let datenew = new Date(resultList[i].createdDate);
        let date = datenew.toString();
        let li = document.createElement("li");
        hideLoader2();
        li.style.font = "Open Sans";
        li.style.fontSize = "18px";
        li.innerHTML = `The Fibonacci Of  <strong>${nums}</strong>   is   <strong>${res}</strong>   Calculated at:   ${date}`;
        ul.appendChild(li);
        document.getElementById("historyList").appendChild(ul);
      }
    });
}

window.onload = presentHistoryList;

function hideLoader2() {
  document.getElementById("loader2").style.visibility = "hidden";
}

function showLoader2() {
  document.getElementById("loader2").style.visibility = "visible";
}

function hideLoader1() {
  document.getElementById("loader1").style.visibility = "hidden";
}

function showLoader1() {
  document.getElementById("loader1").style.visibility = "visible";
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
