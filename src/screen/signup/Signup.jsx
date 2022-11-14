import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div>
        <div className='container-fluid'>
          <div className='signup-left'>

          </div>
          <div className='signup-right'>
            <div className='signup-form-wrapper'>
              <div className='signup-header'>
                <h3>Sign up to Website</h3>
              </div>
              <hr />
              <div className='signup-form'>
                <form action="">
                  <div className='row'>
                    <div className='col-md-6 '>
                      <label htmlFor="name" id='name'>Name</label>
                      <input type="text" className='input-field' />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor="username" id="username">Username</label>
                      <input type="text" className='input-field' />
                    </div>
                    <div className='col-md-6'>
                    <label htmlFor="email" id='email'>Email</label>
                    <input type="text" />
                    </div>
                    <div className='col-md-6'>
                    <label htmlFor="mobile" id='mobile'>Mobile</label>
                    <input type="text"/>
                    </div>
                    <label htmlFor="address">Address</label>
                    <input type="text" className='signup-address' />
                    <div className='col-md-6'>
                    <label htmlFor="pincode" id='pincode'>Pincode</label>
                    <input type="text" />
                    </div>
                    <div className='col-md-6'>
                    <label htmlFor="password" id='password'>Password</label>
                    <input type="text"/>
                    </div>
                    <div className='signup-btn my-4'>
                      <input type="submit" value="Sign Up" />
                    </div>
                    <div className='signup-add'>
                                <p>Already a member?</p>
                                <Link to='/'>Sign In now</Link>
                            </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup