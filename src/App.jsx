import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';

const App=()=> {

    const expenses=[
      {id:'e1',title: 'Toliet Paper',amount: 94.12, date: new Date(2020, 7 , 14)},
      {id:'e2',title: 'Toliet Paper',amount: 294.67, date: new Date(2021, 2 , 28)},
      {id:'e3',title: 'New TV',amount: 799.49, date: new Date(2021, 2 , 12)},
      {id:'e4',title: 'New Desk(wooden)',amount: 450.0, date: new Date(2021, 5 , 12)},
    
    ]
  return (
    <div>
      <h2>Let's Get Started!</h2>
      <p>This is also visable!</p>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
