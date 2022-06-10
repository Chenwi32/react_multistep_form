import React from 'react'

function PersonalDetails() {
  return (
      <div>
          <p>First Name:</p>
          <input type="text" placeholder='First Name...' />
          <p>Last Name:</p> 
          <input type="text" placeholder='Last Name...' />
          <p>Date Of Birth:</p>
          <input type='date' />
          <p>Country</p>
          <input type='text' placeholder='Country...'/>
    </div>
  )
}

export default PersonalDetails