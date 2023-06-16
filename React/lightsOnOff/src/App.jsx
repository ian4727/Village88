import { useState } from 'react';
import './App.css';
import On from './assets/images/on.jpg';
import Off from './assets/images/off.png';

function App() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className='App' style={{backgroundImage: `url(${isOn ? On : Off})`}}>
      <button onClick={() => setIsOn(prev => !prev)}>Switch</button>
    </div>
  );
}

export default App;
