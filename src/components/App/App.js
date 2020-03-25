import React, { Component } from 'react';
import Form from '../Form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cusine: []
    }
  }

  clickButton() {
    console.log('submit')
  }; 
  
  render() {
  return(
  <div className="app-container">
    <Form
      cuisine={['Chinese', 'Japanese', 'Taiwanese']}
      clickButton = {this.clickButton}
    />
  </div>
  
  )}
}

export default App;
