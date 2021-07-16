import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>July 16th 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">R$200,00</div>
            </div>
        </div>
    );
}

export default ExpenseItem;