import React from 'react'

function PersonalDetails({formData, setFormData}) {
  return (
    <div>
      <p>First Name:</p>
      <input
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({
            ...formData,
            firstName: e.target.value,
          });
        }}
      />
      <p>Last Name:</p>
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({
            ...formData,
            lastName: e.target.value,
          });
        }}
      />
      <p>Date Of Birth:</p>
      <input
        type="date"
        value={formData.dateOfBirth}
        onChange={(e) => {
          setFormData({
            ...formData,
            dateOfBirth: e.target.value,
          });
        }}
      />
      <p>Country</p>
      <input
        type="text"
        placeholder="Country..."
        value={formData.country}
        onChange={(e) => {
          setFormData({
            ...formData,
            country: e.target.value,
          });
        }}
      />
    </div>
  );
}

export default PersonalDetails