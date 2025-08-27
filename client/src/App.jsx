import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header.jsx';
import { Balance } from './components/Balance.jsx';
import { IncomeExpenses } from './components/IncomeExpenses.jsx';
import { TransactionList } from './components/TransactionList.jsx';
import { AddTransaction } from './components/AddTransaction.jsx';
import { GlobalProvider } from './context/GlobalState.jsx';





function App() {

  return (
    <GlobalProvider>
      <div>
        <Header/>
      </div>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    
    </GlobalProvider>
  )
}

export default App
