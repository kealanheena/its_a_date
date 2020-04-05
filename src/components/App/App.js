import React, { Component } from 'react';
import Form from '../Form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisine: ['Chinese', 'Japanese', 'Taiwanese'],
      selectedCuisine: [],
    }
    this.setCuisines = this.setCuisines.bind(this)
  }

  setCuisines = async() => {
    await this.setState ({
      selectedCuisine: [document.getElementById('person_one').value, document.getElementById('person_two').value]
      })
      console.log(this.state)
  };


  render() {
    
  return(
    <div className="app-container">
      <Form
        cuisine={this.state.cuisine}
        setCuisines = {this.setCuisines}
      />
    </div>
    
  )}
}

export default App;
