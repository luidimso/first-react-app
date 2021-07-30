import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import React, {useState} from "react";

const DB = [
  {
    id: '1',
    title: 'Car 1',
    amount: 200.50,
    date: new Date()
  },
  {
    id: '2',
    title: 'Car 2',
    amount: 200.50,
    date: new Date()
  },
  {

    id: '3',
    title: 'Car 3',
    amount: 200.50,
    date: new Date()
  },
  {

    id: '4',
    title: 'Car 4',
    amount: 200.50,
    date: new Date()
  }
];

function App() {
  const [expenses, setExpenses] = useState(DB);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}></NewExpenses>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
