// Loan application form submit event handler
document.getElementById('loanForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get input values
    var name = document.getElementById('name').value;
    var amount = document.getElementById('amount').value;
    var purpose = document.getElementById('purpose').value;
  
    // Create a new row in the loan list table
    var loanListTable = document.querySelector('#loanList table');
    var row = loanListTable.insertRow(-1);
    var nameCell = row.insertCell(0);
    var amountCell = row.insertCell(1);
    var purposeCell = row.insertCell(2);
  
    // Populate the new row with data
    nameCell.innerHTML = name;
    amountCell.innerHTML = amount;
    purposeCell.innerHTML = purpose;
  
    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('purpose').value = '';
  });
  