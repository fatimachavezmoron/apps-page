
import { useRef,useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const Form = () => {

  const focusRef = useRef()
 
  const initialForm = {
    userName: '',
    email: '',
    password: ''
  }
  const {formState, onInputChange} = useForm(initialForm)

  const { userName, email, password} = formState

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
  }

  useEffect(() => {
    focusRef.current.focus()
  }, [])
  

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">User name</label>
        <input 
          ref= {focusRef}
          type="text" 
          className="form-control" 
          name="userName" 
          placeholder="Enter your username"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Email1" className="form-label">Email address</label>
        <input 
          type="email" 
          className="form-control" 
          name="email" 
          placeholder="Enter your Email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Password1" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          name="password" 
          placeholder="Enter your password"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
