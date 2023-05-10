import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {title, amount, type, id} = transactionDetails
  return (
    <li className="transaction-list-item">
      <p className="three-words">{title}</p>
      <p className="three-words">{amount}</p>
      <p className="three-words">{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        className="delete-image"
      />
    </li>
  )
}

export default TransactionItem
