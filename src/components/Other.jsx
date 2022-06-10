import React from "react";
import Conditional from "./Conditional";
  let yes = document.getElementById("yes").checked;
function Other() {
const ConditionalDisplay = () => {
  

   /*  if (yes === true) {
      return <Conditional/>;
    }*/
    };  
   
  return (
    <div>
      <p>Do you have an insurance policy</p>
      <label htmlFor="yes">Yes</label>
      <input type="radio" name="inssurance" id="yes" />
      <label htmlFor="no">No</label>
      <input type="radio" name="inssurance" />
      {ConditionalDisplay()}
    </div>
  );
}


 
export default Other;
