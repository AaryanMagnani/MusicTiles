function createMatrix() {
  let count = 0;
  let nTile = document.getElementById("input-el").value;
  for (let r = 0; r < nTile; r++) {
    let rows = document.getElementById("myTable").insertRow(r);
    for (let c = 0; c < nTile; c++) {
      let columns = rows.insertCell(c);
      columns.classList.add("tile");
      count++;
      columns.innerHTML = count;
    }
  }
  nTile = 0;

}

