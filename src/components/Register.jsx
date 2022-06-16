import React from "react";

function Register({ formData, setFormData }) {
  return (
    <div>
      <p>Email:</p>
      <input
        type="email"
        placeholder="Email..."
        value={formData.email}
        onChange={(e) => {
          setFormData({
            ...formData,
            email: e.target.value,
          });
        }}
      />
      <p>User Name:</p>
      <input
        type="text"
        placeholder="User Name..."
        value={formData.userName}
        onChange={(e) => {
          setFormData({
            ...formData,
            userName: e.target.value,
          });
        }}
      />
    </div>
  );
}

export default Register;
