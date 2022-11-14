import React from 'react'
import './LoginForm.css'
import {Link} from 'react-router-dom'
function LoginForm() {
  return (
    <div>
       <div className='container-fluid'>
        <div className='login-wrapper'>
            <div className='login-left'>

            </div>
            <div className='login-right'>
                <div className='login-form-wrapper'>
                    <div className='login-header p-3'>
                        <div className='login-logo'>

                        </div>
                        <div className='login-title'>
                           <h3>Company</h3>
                        </div>
                    </div>
                    <div className='login-form'>
                        <h6>Please login to your account</h6>
                        <form action="" className='login-input my-4'>
                            <div className='login-input-field py-4'>
                            <input type="text" placeholder='Username' className='col-xs-4'/>
                            </div>
                            <div className='login-input-field'>
                            <input type="text" placeholder='Password' className='col-xs-4'/>
                            </div>
                            <div className='login-btn my-4'>
                            <input type="submit" value="Sign In" />
                            </div>
                            <div className='login-add'>
                                <p>Not a member?</p>
                                <Link to='/signup'>Sign up now</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default LoginForm