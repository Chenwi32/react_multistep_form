import React from "react";

function Other() { 
   
  return (
    <div>
      <p>Do you have an insurance policy</p>
      <label htmlFor="yes">Yes</label>
      <input type="radio" name="inssurance" id="yes" />
      <label htmlFor="no">No</label>
      <input type="radio" name="inssurance" />
    </div>
  );
}


 
export default Other;
