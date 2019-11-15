import React from 'react';
import './Form.css';

export default function Form() {
  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          // props.handleSubmit()
        }}
      >
        <label htmlFor="first_name">First Name: </label>
        <input
          // value={}
          type="text"
          name="first_name"
          // onChange={(e) => props.handleFormChange(e)} 
          />

        <label>Last Name: </label>
        <input
          // value={}
          type="text"
          name="last_name"
          // onChange={(e) => props.handleFormChange(e)} 
          />

        <label>Email: </label>
        <input
          // value={}
          type="email"
          name="email"
          // onChange={(e) => props.handleFormChange(e)} 
          />

        <label>Password: </label>
        <input
          // value={}
          type="password"
          name="password"
          // onChange={(e) => props.handleFormChange(e)} 
          />

      </form>
    </div>
  )
}
