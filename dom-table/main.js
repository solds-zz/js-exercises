function createTable(data) {
  var table = document.createElement("table");
  var rows = data.length;
  for (var i = 0; i < rows; i++) {
    var row = document.createElement("tr");
    var columns = data[i].length;
    for (var j = 0; j < columns; j++) {
      var cell = document.createElement("td");
      var text = document.createTextNode(data[i][j]);
      cell.appendChild(text);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  document.body.appendChild(table);
}

var data = [
  ["Car", "Top Speed", "Price"],
  ["Chevrolet", "120mph", "$10,000"],
  ["Pontiac", "140mph", "$20,000"]
];
createTable(data);