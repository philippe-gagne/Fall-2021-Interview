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

        const email_value = this.emailInput.state.value;
        const password_value = this.passwordInput.state.value;
        const check = document.getElementById("terms_conditions").checked;
        console.log(check); 
        console.log(email_value);
        console.log(password_value);
        
        if(email_value==""){
            console.log("Email cannot be empty");
        } else if (!this.validateEmail(email_value)){
            console.log("This doesn't look like an email, please try again");
        } else if (password_value==""){
            console.log("Password cannot be empty");
        } else if (password_value.length < 8){
            console.log("Your password must be 8 characters or longer");
        } else if (!check){
            console.log("You must agree to the Terms of Service and Privacy Policy before proceeding");
        } else {
            console.log("Login succesful");
        }
        
        event.preventDefault();
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <a href="https://www.google.com/" target="_blank">
            <button className="google-button"><img src={google_logo} alt="Google logo" className="button-icon"></img>Continue with Google</button>
            </a>

            <div className="strike">
                <span>or sign in with email</span>
            </div>

          <div className="input-component"> 
            <InputField name="email" type="email"  label="Email" ref={(ref) => this.emailInput = ref}/>
          </div>

          <div className="input-component"> 
            <InputField name= "password" type="password" label="Password (min. 8 characters)" ref={(ref) => this.passwordInput = ref}/>
          </div> 

            <div className="input-component">
            <input type="checkbox" id="terms_conditions" name="terms_conditions" />
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