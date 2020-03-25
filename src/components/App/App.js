import React, { Component } from 'react';
import Form from '../Form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisine: ['Chinese', 'Japanese', 'Taiwanese'],
      selectedCuisine: []
    }
    this.clickButton = this.clickButton.bind(this)
  }

  clickButton = async() => {
    // console.log(this.state.cuisine)
    await this.setState({
      selectedCuisine: [document.getElementById('person_one').value, document.getElementById('person_two').value]
    })
    console.log(this.state.selectedCuisine)
  };


  render() {
  return(
  <div className="app-container">
    <Form
      cuisine={this.state.cuisine}
      clickButton = {this.clickButton}
    />
  </div>
  )}
}

export default App;
