import React from 'react';
import './styles.css';
// ROUTER 
import Router from './router/Router';

const App = () => {
  
  return (
    <div className='app'>
      <br/><br/>
      <h1 style={{textAlign:'center'}}>Redux Shop Store</h1>
      <Router/>
    </div>
  );

}

export default App;
