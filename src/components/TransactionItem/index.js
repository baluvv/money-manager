import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {title, amount, type, id} = transactionDetails

  const onDelete = () => {
    onDeleteTransaction(id)
  }
  const amountType = type === 'INCOME' ? 'Income' : 'Expenses'

  return (
    <li className="transaction-list-item">
      <p className="three-words">{title}</p>
      <p className="three-words">Rs {amount}</p>
      <p className="three-words">{amountType}</p>
      <button
        onClick={onDelete}
        type="button"
        className="delete-button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
