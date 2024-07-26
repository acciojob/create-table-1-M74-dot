function insert_Row() {
    //Write your code here
   var table = document.getElementById('sampleTable');
    
    // Insert a new row at the top of the table (index 0)
    var newRow = table.insertRow(0);
    
    // Insert new cells in the new row
    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);
    
    // Set the text for the new cells
    newCell1.innerHTML = 'New Cell1';
    newCell2.innerHTML = 'New Cell2';
  
}
