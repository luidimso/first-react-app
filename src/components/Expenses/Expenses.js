import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    const [expenses, setExpenses] = useState(props.expenses);
    
    function updateFilter(filter) {
        setFilteredYear(filter);
        updateExpenses(filter);
    }

    function updateExpenses(filter) {
        setExpenses(prevExpenses => {
            return props.expenses.filter(expense => {
                return expense.date.getFullYear().toString() === filter;
            });
        });
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterUpdated={updateFilter}></ExpensesFilter>
            {
                expenses.map(expense => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>))
            }
        </Card>
    );
}

export default Expenses;