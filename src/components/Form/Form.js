import React from 'react';

function Form(props) {
  
    const cuisineList = props.cuisine.map((cuisine, key) => (
      <option key={key} value={cuisine}>
        {cuisine}
      </option>
    ))

  
    return (
      <div className="app-container">
        <select id="person_one"> 
          {cuisineList}
        </select>
        <select id="person_two"> 
          {cuisineList}
        </select>
        <button 
          onClick={() => props.setCuisines()}
          className="submit-button">
          Submit!
        </button>
      </div>
    );

    
  }
  


export default Form;
