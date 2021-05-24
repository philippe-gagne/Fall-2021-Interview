import React, {useState} from 'react';
import styled from 'styled-components'
import './App.css';
import google_logo from './assets/google_logo.svg';
import InputField from './InputField.js'


class InputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {

        var email_address = email.state.value;
        var pw = password.state.value;
        var check = document.getElementById("terms_conditions").checked;
        
        console.log(email_address);


    //   alert('A name was submitted: ' + this.state.value);
    //   event.preventDefault();
    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <button className="google-button"><img src={google_logo} alt="Google logo" className="button-icon"></img>Continue with Google</button>

            <div className="strike">
                <span>or sign in with email</span>
            </div>

          <div className="input-component"> 
            <InputField name="email" type="email"  label="Email" />
          </div>

          <div className="input-component"> 
            <InputField name= "password" type="password" label="Password (min. 8 characters)"/>
          </div> 

            <div className="input-component">
            <input type="checkbox" id="terms_conditions" name="terms_conditions" value="Terms and Conditions" />
                <label for="terms_conditions">I agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a></label><br />
            </div>

          <div className="input-component"> 
            <input type="submit" value="Get Started" className="submit-button" onClick={this.handleSubmit}/>
          </div>
        </form>
      );
    }
  }

export default InputForm