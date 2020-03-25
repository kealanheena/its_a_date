import React from 'react';
const Form = ({
  cuisine, clickButton
}) => {
  const cuisineList = cuisine.map((cuisine, key) => (
    <option key={key} value={cuisine}>{cuisine}</option>
  ))

return (<div className="app-container">
 <select id="person_one"> 
   {cuisineList}
 </select>
 <select id="person_two"> 
   {cuisineList}
 </select>
 <button onClick={clickButton}>Submit!</button>
</div>);
}
export default Form;