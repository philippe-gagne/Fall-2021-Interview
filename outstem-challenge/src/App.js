import React, {useState} from 'react'
import outstem_logo from './assets/outstem_logo_icon.png'
import InputForm from './InputForm.js'
import google_logo from './assets/google_logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="login-form">
          
          <h2 className="title">Sign up to begin your adventure</h2>
          <h4 className="subtitle">Already a member?  <a href="">Login instead</a></h4>

          <a href="https://www.google.com/" target="_blank">
            <button className="google-button" onClick={""}><img src={google_logo} alt="Google logo" className="button-icon"></img>Continue with Google</button>
          </a>

          <InputForm />
      
        </div>
      </header>
      <img src={outstem_logo} style={{position:"fixed", bottom:"20px", left:"20px", width:"48px"}}/>
    </div>
  );
}

export default App;
