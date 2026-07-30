// Array to store all expenses
let expenses = [];

// Function to add expense
function addExpense() {
  let category = document.getElementById("category").value;

  let amount = Number(document.getElementById("amount").value);

  if (category === "" || amount <= 0) {
    alert("Enter valid expense details.");

    return;
  }

  // Object
  let expense = {
    category: category,

    amount: amount,
  };

  // Array
  expenses.push(expense);

  displayExpenses();

  document.getElementById("category").value = "";

  document.getElementById("amount").value = "";
}

// Function to display expenses
function displayExpenses() {
  let table = document.getElementById("expenseTable");

  table.innerHTML = "";

  // Loop
  for (let i = 0; i < expenses.length; i++) {
    table.innerHTML += `

        <tr>

        <td>${expenses[i].category}</td>

        <td>$${expenses[i].amount}</td>

        </tr>

        `;
  }
}

// Function to calculate all values
function calculateExpense() {
  let income = Number(document.getElementById("income").value);

  if (income <= 0) {
    alert("Please enter income.");

    return;
  }

  let totalExpense = 0;

  let highestExpense = expenses[0];

  // Loop through array
  for (let expense of expenses) {
    totalExpense += expense.amount;

    if (expense.amount > highestExpense.amount) {
      highestExpense = expense;
    }
  }

  let balance = income - totalExpense;

  let expensePercent = (totalExpense / income) * 100;

  let savingPercent = (balance / income) * 100;

  document.getElementById("incomeResult").innerHTML = "$" + income.toFixed(2);

  document.getElementById("expenseResult").innerHTML =
    "$" + totalExpense.toFixed(2);

  document.getElementById("balanceResult").innerHTML = "$" + balance.toFixed(2);

  document.getElementById("expensePercent").innerHTML =
    expensePercent.toFixed(2) + "%";

  document.getElementById("savingPercent").innerHTML =
    savingPercent.toFixed(2) + "%";

  document.getElementById("highestExpense").innerHTML =
    highestExpense.category + " ($" + highestExpense.amount + ")";

  document.getElementById("expenseBar").style.width = expensePercent + "%";

  document.getElementById("savingBar").style.width = savingPercent + "%";
}
