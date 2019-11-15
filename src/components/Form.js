import React from 'react';
import './Form.css';

export default function Form(props) {
  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.handleSubmit()
        }}
      >
        <label htmlFor="first_name">First Name: </label>
        <input
          value={props.formData.first_name}
          type="text"
          name="first_name"
          onChange={(e) => props.handleChange(e)} 
          />

        <label>Last Name: </label>
        <input
          value={props.formData.last_name}
          type="text"
          name="last_name"
          onChange={(e) => props.handleChange(e)} 
          />

        <label>Email: </label>
        <input
          value={props.formData.email}
          type="email"
          name="email"
          onChange={(e) => props.handleChange(e)} 
          />

        <label>Password: </label>
        <input
          value={props.formData.password}
          type="password"
          name="password"
          onChange={(e) => props.handleChange(e)} 
          />

          <button>Submit</button>

      </form>
    </div>
  )
}
