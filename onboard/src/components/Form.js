import React from 'react'

export default function Form(props) {
  const {
    values,
    onInputChange,
    onSubmit,
    disabled,
    errors,
    onCheckboxChange,
  } = props

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a User</h2>

        {/* Submit button */}
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          {/* Errors Render Here */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>User information</h4>
        <label>Username&nbsp;
          <input
            value={values.username}
            onChange={onInputChange}
            name='username'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='email'
          />
        </label>

        <label>Password
          <input
            value={values.password}
            onChange={onInputChange}
            name='password'
            type='text'
          />
        </label>
        {/* Check Box */}
        <label>Terms of Service
          <input
            type='radio'
            name='tos'
            checked={values.tos}
            onChange={onCheckboxChange}
          />
        </label>

      </div>
    </form>
  )
}