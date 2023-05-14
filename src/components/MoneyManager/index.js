import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const Options = props => {
  const {optionDetails} = props
  const {optionId, displayText} = optionDetails
  return <option value={optionId}>{displayText}</option>
}

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    income: 0,
    expenses: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onAddTransaction = () => {
    const {title, amount, type, income, expenses} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
      income,
      expenses,
    }
    if (type === 'INCOME') {
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        title: '',
        amount: '',
        income: parseInt(prevState.income) + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        title: '',
        amount: '',
        expenses: parseInt(prevState.expenses) + parseInt(amount),
      }))
    }
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state

    const selectedTransaction = transactionsList.filter(
      eachTransaction => eachTransaction.id === id,
    )

    const deleteAmount = parseInt(selectedTransaction[0].amount)

    const filteredTransactions = transactionsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    if (selectedTransaction[0].type === 'EXPENSES') {
      this.setState(prevState => ({
        expenses: prevState.expenses - deleteAmount,
      }))
    } else {
      this.setState(prevState => ({income: prevState.income - deleteAmount}))
    }

    this.setState({transactionsList: filteredTransactions})
  }

  render() {
    const {title, amount, income, expenses, transactionsList} = this.state
    return (
      <div className="app-container">
        <div className="profile-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="wish">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <ul className="money-details-container">
          <MoneyDetails income={income} expenses={expenses} />
        </ul>
        <div className="bottom-container">
          <div className="form-container">
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              className="input"
              placeholder="TITLE"
              onChange={this.onChangeTitle}
              value={title}
            />
            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              className="input"
              placeholder="AMOUNT"
              onChange={this.onChangeAmount}
              value={amount}
            />
            <label className="label" htmlFor="options">
              TYPE
            </label>
            <select className="input" id="options" onChange={this.onChangeType}>
              {transactionTypeOptions.map(eachOption => (
                <Options optionDetails={eachOption} key={eachOption.optionId} />
              ))}
            </select>
            <button
              type="button"
              className="add-button"
              onClick={this.onAddTransaction}
            >
              Add
            </button>
          </div>
          <ul className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="title-amount-type">
              <p className="heading-word">Title</p>
              <p className="heading-word">Amount</p>
              <p className="heading-word">Type</p>
              <p className="heading-word">remove transaction</p>
            </div>
            {transactionsList.map(eachTransaction => (
              <TransactionItem
                transactionDetails={eachTransaction}
                key={eachTransaction.id}
                onDeleteTransaction={this.onDeleteTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
