function getFibonacci(index) {
  let serverCallIndex = index;
  if (serverCallIndex < 50) {
    let fibUrl = "http://localhost:5050/fibonacci/" + index;
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
          hideSmall();
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

document.getElementById("isButton").addEventListener("click", fibonacci);

function doFibonacci(index) {
  hideError();
  hideMol();
  showResult();
  let manRun = index;
  let firstnum = 0;
  let secondnum = 1;
  let result;
  if (manRun >= 1) {
    for (let i = 2; i <= index; i++) {
      result = firstnum + secondnum;
      firstnum = secondnum;
      secondnum = result;
      document.getElementById("userOutput").innerText = result;
      hideSmall();
    }
  } else {
    showSmall();
    hideResult();
  }
}

function fibonacci() {
  let check = document.getElementById("checkBox1");
  if (check.checked) {
    console.log("Checked");
    getFibonacci(document.getElementById("userInput").value);
  } else {
    console.log("Not Checked");
    doFibonacci(document.getElementById("userInput").value);
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
      ul.style.padding = "15px";
      for (let i = 0; i < resultList.length; i++) {
        let nums = resultList[i].number;
        let res = resultList[i].result;
        let datestamp = resultList[i].createdDate;
        let datenew = new Date(resultList[i].createdDate);
        let date = datenew.toString();
        let li = document.createElement("li");
        document.getElementById("historyList").appendChild(ul);
        ul.appendChild(li);
        hideLoader2();
        li.innerHTML = `The Fibonacci Of  <strong>${nums}</strong>   is   <strong>${res}</strong>   Calculated at:   ${date}`;
        li.style.borderBottom = "solid";
        li.style.font = "Open Sans";
        li.style.fontSize = "18px";
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

function hideSmall() {
  document.getElementById("smallOne").style.visibility = "hidden";
}
function showSmall() {
  document.getElementById("smallOne").style.visibility = "visible";
}

// function clearAll()
// document.getElementById("smallOne").style.visibility = "hidden";
// document.getElementById("userOutputError").style.visibility = "hidden";
