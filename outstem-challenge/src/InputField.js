import React, {useState} from 'react';
import styled from 'styled-components'
import './App.css';
import google_logo from './assets/google_logo.svg';


class InputField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    render(){
        return(
            <label>
                {this.props.label}<br/>
                <input type={this.props.type} className="input-field" value={this.state.value} onChange={this.handleChange} /><br/>
            </label>
        )
    }
}

export default InputField