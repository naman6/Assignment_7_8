function generateTable() {
    var numRows = document.getElementById('t1').value;
    var numCols = document.getElementById('t2').value;
  
    if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
      alert('Please enter valid positive integers for rows and columns.');
      return;
    }
  
    var table = document.createElement('table');
  
    for (var i = 0; i < numRows; i++) {
      var row = table.insertRow(i);
      for (var j = 0; j < numCols; j++) {
        var cell = row.insertCell(j);
        cell.textContent = 'Cell ' + (i + 1) + '-' + (j + 1);
      }
    }
  
    document.body.innerHTML = '';
  
    document.body.appendChild(table);
    document.body.appendChild(document.getElementById('b2'));
    document.body.appendChild(document.getElementById('b3'));
  }
  
  function addColumn() {
    var table = document.querySelector('table');
    if (table) {
      var numRows = table.rows.length;
      for (var i = 0; i < numRows; i++) {
        var cell = table.rows[i].insertCell(-1);
        cell.textContent = 'Cell ' + (i + 1) + '-' + table.rows[i].cells.length;
      }
    }
  }
  
  function addRow() {
    var table = document.querySelector('table');
    if (table) {
      var newRow = table.insertRow(-1);
      var numCols = table.rows[0].cells.length;
      for (var j = 0; j < numCols; j++) {
        var cell = newRow.insertCell(j);
        cell.textContent = 'Cell ' + (table.rows.length) + '-' + (j + 1);
      }
    }
  }
  