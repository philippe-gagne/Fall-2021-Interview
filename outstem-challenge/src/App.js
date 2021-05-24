import React, {useState} from 'react'
import styled from 'styled-components'
import logo from './logo.svg';
import google_logo from './assets/google_logo.svg';
import backdrop from './assets/backdrop.jpg';
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
    </div>
  );
}

export default App;
