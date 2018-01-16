import React, { Component } from 'react';
import './Translate.css';

class Translate extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);    
  };

  handleChange(event){
    //change to markup
  this.setState({value:event.target.value})
  }

  render() {
    const text = this.state.value;
    return (
      <div>
       <textarea className="inputbox" value = {this.state.value} onChange={this.handleChange}></textarea>
       <p className="outputbox">{text}</p>
      </div>
    );
  }
}

export default Translate;