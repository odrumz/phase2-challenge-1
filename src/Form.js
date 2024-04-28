import React from "react";

const Form = ({ addTransaction }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const date = event.target[0].value; 
        const description = event.target[1].value; 
        const category = event.target[2].value;
        const amount = event.target[3].value; 

        if (!date || !description || !category || !amount) {
            alert("Please kindly fill the forms");
            return;
          }
      
          const newTransaction = {
            date,
            description,
            category,
            amount
          };
          addTransaction(newTransaction);
          event.target.reset();
        };
      
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="mm / dd / yyyy" />
              <input type="text"  placeholder="Description" />
              <input type="text" placeholder="Category" />
              <input type="number" placeholder="Amount" />
              <button id="transaction" type="submit">Add Transaction</button>
            </form>
          </div>
        );
      };
      
      export default Form;