import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OrderForm from './components/OrderForm'

function App() {
  return (
    <div className="App">
      <OrderForm className="order"></OrderForm>
    </div>
  )
}

export default App
