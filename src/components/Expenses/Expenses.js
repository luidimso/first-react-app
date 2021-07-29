import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    
    function updateFilter(filter) {
        setFilteredYear(filter);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterUpdated={updateFilter}></ExpensesFilter>
            {
                props.expenses.map(expense => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>))
            }
        </Card>
    );
}

export default Expenses;