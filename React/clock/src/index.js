import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(){
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {currentTime.toLocaleTimeString()}.</h2>
    </div>
  )
}

//export default Clock;
const element = <Clock />;
root.render(element);
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
