import Expenses from "./components/Expenses";

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
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
