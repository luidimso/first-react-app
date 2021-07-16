import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Testing</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
