function getFibonacci(index) {
  let serverCallIndex = index;
  //   console.log(index);
  //   console.log(serverCallIndex);

  let url = "http://localhost:5050/fibonacci/" + serverCallIndex;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log(response.json);
      //   console.log(data.result);
      //   console.log(index);
      //   console.log(serverCallIndex);
      document.getElementById("userOutput").innerText = data.result;
    })
    .catch(error => console.log(error));
}
