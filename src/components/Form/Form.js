import React from 'react';
const Form = ({
  cuisine,
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
</div>);
}
export default Form;