import React from 'react';
import './App.css';
import danger_icon from './assets/danger_icon.svg';
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
            console.log("email empty");
            document.getElementById("error-msg").innerHTML = "The email field cannot be empty";
            this.show_errorMessage(true);
        } else if (!this.validateEmail(email_value)){
            console.log("email invalid");
            document.getElementById("error-msg").innerHTML = "That doesn't look like an email, please try again";
            this.show_errorMessage(true);
        } else if (password_value==""){
            console.log("password empty");
            document.getElementById("error-msg").innerHTML = "The password field cannot be empty";
            this.show_errorMessage(true);
        } else if (password_value.length < 8){
            console.log("password invalid");
            document.getElementById("error-msg").innerHTML = "Your password must be 8 characters or longer";
            this.show_errorMessage(true);
        } else if (!check){
            console.log("TOS unchecked");
            document.getElementById("error-msg").innerHTML = "You must agree to the Terms of Service and Privacy Policy before proceeding";
            this.show_errorMessage(true);
        } else {
            console.log("Login succesful");
            this.show_errorMessage(false);
        }
        
        event.preventDefault();
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    show_errorMessage(show) {
        var x = document.getElementById("error-block");
        if (show) {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

    render() {
      return (
            <form onSubmit={this.handleSubmit}>

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
                    <label for="terms_conditions" style={{wordWrap:"break-word"}}>I agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a></label><br />
                </div>

                <div className="input-component">
                    <input type="submit" value="Get Started" className="submit-button" onClick={this.handleSubmit}/>
                </div>
                
                <div className="error-message" id="error-block">
                <img src={danger_icon} alt="Danger warning" className="button-icon" style={{float:"left", paddingBottom:"12px"}}></img>
                <p id="error-msg" style={{margin:"0"}}>Error Message</p>
                </div>
            </form>
      );
    }
  }

export default InputForm