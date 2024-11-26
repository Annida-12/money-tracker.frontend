const BASE_URL = "https://money-tracker-o2eg6i3uk-annidas-projects-a8ec6193.vercel.app/"; 

function fetchTransactions() {
  fetch(`${BASE_URL}/api/transactions`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data transaksi:", data);
    
      const list = document.getElementById("transaction-list");
      list.innerHTML = "";
      data.forEach((transaction) => {
        const item = document.createElement("li");
        item.textContent = `${transaction.description}: $${transaction.amount}`;
        list.appendChild(item);
      });
    })
    .catch((error) => console.error("Error fetching transactions:", error));
}

document.addEventListener("DOMContentLoaded", fetchTransactions);
