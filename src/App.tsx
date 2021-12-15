import React, { useState } from 'react';
import './App.css';


import RiskCard from './components/RiskCard/RiskCard';

import ComponentsSeparately from './components/ComponentsSeparately';

function App() {
  const [value, setValue] = useState(0);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const num = +event.target.value;
    if (num>5 || num<1) return;
    setValue(+event.target.value);
  }

  return (
    <div className="App">
      <div style={{"padding": "20px"}}>
        <input 
        // Инпут просто для теста
          value={value} 
          onChange={handleChange} 
          type='number' 
          max={5} min={1}
          style={{'fontSize': "20px"}}
        />Изменить уровень риска
      </div>


      <RiskCard risk={value || 1} />
      <RiskCard risk={value || 2} />
      <RiskCard risk={value || 3} />
      <RiskCard risk={value || 4} />
      <RiskCard risk={value || 5} />


      <ComponentsSeparately />
    </div>
  );
}

export default App;
