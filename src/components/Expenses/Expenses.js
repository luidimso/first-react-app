import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
            <ExpensesChart expenses={expenses}></ExpensesChart>
            <ExpensesList items={expenses}></ExpensesList>
        </Card>
    );
}

export default Expenses;