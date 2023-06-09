import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  const balanceAmount = parseInt(income) - parseInt(expenses)
  const incomeAmount = balanceAmount + parseInt(expenses)
  return (
    <>
      <li className="balance-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="amount-container">
          <p className="amount-type">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </li>
      <li className="balance-item income-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="amount-container">
          <p className="amount-type">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </li>
      <li className="balance-item expenses-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="amount-container">
          <p className="amount-type">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </>
  )
}
export default MoneyDetails
