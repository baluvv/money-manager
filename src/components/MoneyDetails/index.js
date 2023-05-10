import './index.css'

const MoneyDetails = () => (
  <>
    <li className="balance-item">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
        className="image"
      />
      <div className="amount-container">
        <p className="amount-type">Your Balance</p>
        <h1 className="amount">Rs 0</h1>
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
        <h1 className="amount">Rs 0</h1>
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
        <h1 className="amount">Rs 0</h1>
      </div>
    </li>
  </>
)

export default MoneyDetails
