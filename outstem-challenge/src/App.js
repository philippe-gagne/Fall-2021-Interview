import React, {useState} from 'react'
import styled from 'styled-components'
import logo from './logo.svg';
import google_logo from './assets/google_logo.svg';
import backdrop from './assets/backdrop.jpg';
import InputForm from './InputForm.js'
import './App.css';

function WelcomeMessage() {
  return <p>here Message</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="login-form">
          <h2 className="title">Sign up to begin your adventure</h2>
          <h4 className="subtitle">Already a member?  <a href="">Login instead</a></h4>

          {/* <form> */}
            {/* <GoogleButton><img src={google_logo} alt="Google logo" className="button-icon"></img>Continue with Google</GoogleButton>

            <div className="strike">
              <span>or sign in with email</span>
            </div> */}
          <InputForm />
          
        </div>
      </header>
    </div>
  );
}

// const GoogleButton = styled.button`
// background-color: white;
// border-color: var(--secondary);
// border-width: 1px;
// border-radius: 4px;
// border-style: solid;
// font-family: "Montserrat";
// font-style: normal;
// font-size: 12;
// height: 3.5em;
// width: 100%;
// vertical-align: middle;
// `

// const 

export default App;
