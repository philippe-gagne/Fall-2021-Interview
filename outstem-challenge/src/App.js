import React, {useState} from 'react'
import outstem_logo from './assets/outstem_logo_icon.png'
import InputForm from './InputForm.js'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="login-form">
          <h2 className="title">Sign up to begin your adventure</h2>
          <h4 className="subtitle">Already a member?  <a href="">Login instead</a></h4>

          <InputForm />
          
        </div>
      </header>
      <img src={outstem_logo} style={{position:"fixed", bottom:"16px", left:"16px"}}/>
    </div>
  );
}

export default App;
