import React, { Component } from 'react';
import Form from '../Form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisine: ['Chinese', 'Japanese', 'Taiwanese'],
      selectedCuisine: [],
      personOneChoice: "Chinese",
      personTwoChoice: "Chinese"
    }
    this.setCuisines = this.setCuisines.bind(this)
  }

  selectedCuisineOne = (e) => {
    this.setState ({
      personOneChoice: e.target.value
    })
    console.log(this.state)
  }

  selectedCuisineTwo = (e) => {
    this.setState ({
      personTwoChoice: e.target.value
    })
    console.log(this.state)
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
        selectedCuisineOne={this.selectedCuisineOne}
        selectedCuisineTwo={this.selectedCuisineTwo}
      />
    </div>
    
  )}
}

export default App;
