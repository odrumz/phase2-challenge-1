
import React, { useState } from "react";
import "./App.css";
import Transaction from "./Transaction";
import Form from "./Form";

function App() {
  const [transactions, setTransactions] = useState([
    { date: "03-01-2024", description: "Wifi", category: "Internet", amount: "$200" },
    { date: "05-08-2024", description: "Entertainment", category: "Music", amount: "$150" },
    { date: "07-21-2024", description: "Rent", category: "Appartment", amount: "$2000" },
    { date: "08-16-2024", description: "Fruits", category: "Food", amount: "$150" },
    { date: "09-01-2024", description: "Car paint", category: "Vehicle", amount: "$1500" }
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <header>The Royal Bank Of Flatiron</header>
       
      <input
      className="transaction"
      type="text"
      placeholder="Search by Description"
      value={searchTerm}
      onChange={handleSearch}
      />
      <button>🔍</button>
      
      <Form addTransaction={addTransaction} />
      <Transaction transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
}

export default App;