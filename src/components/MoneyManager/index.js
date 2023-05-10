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

class MoneyManager extends Component {
  
    state = {
    transactionsList: [],
    title: '',
    amount: '',
    type:"",
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

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
      type: initialDisplayText,
    }))
  }

  render() {
      
    const {transactionsList, title, amount,type=} = this.state

    return (
      <div className="app-container">
        <div className="profile-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="wish">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <ul className="money-details-container">
          <MoneyDetails />
        </ul>
        <div className="bottom-container">
          <form className="form-container" onSubmit={this.onAddTransaction}>
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
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <ul className="history-list-container">
              <li className="title-amount-type">
                <h1 className="heading-word">Title</h1>
                <h1 className="heading-word">Amount</h1>
                <h1 className="heading-word">Type</h1>
              </li>
              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  transactionDetails={eachTransaction}
                  key={eachTransaction.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
