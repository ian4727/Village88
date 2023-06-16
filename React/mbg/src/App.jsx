import { useState } from 'react'
import './App.css'
import {Balance} from './components/Balance';
import {Log} from './components/Log';
import {Choice} from './components/Choice';

function App() {
    const prizes = [
        {id: 'Low', range:{min:-25, max:100}},
        {id: 'Moderate', range:{min:-100, max:1000}},
        {id: 'High', range:{min:-500, max:-2500}},
        {id: 'Severe', range:{min:-3000, max:5000}}
    ]

    const[money, setMoney] = useState(500)
    const[log, setLog] = useState([])
    const[chance, setChance] = useState(10)

    function moneyHandler(min, max, risk){
        const prize = Math.floor(Math.random() * (max - min + 1)+ min)
        setMoney((money) => money + prize);
        setLog((prevLog) => [...prevLog, {risk: risk, result: prize, money:money + prize, date: new Date().toLocaleString()}])
        setChance((chance) => chance-1)
    }

    return(
        <div className="App">
            <Balance money={money} chance={chance}/>
            
            <Choice prizes={prizes} chance={chance} moneyHandler={moneyHandler}/>
            <Log log={log} chance={chance}/>
        </div>
    )
}

export default App