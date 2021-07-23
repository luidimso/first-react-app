import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpenses(props) {
    function saveExpenseDataHandle(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandle}></ExpenseForm>
        </div>
    );
}

export default NewExpenses;