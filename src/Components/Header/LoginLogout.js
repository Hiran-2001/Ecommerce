import React from 'react'
import './LoginLogout.css'
function LoginLogout({show}) {
  return (
    <div id={show ? 'log-in-out-btn-dissappeare': 'log-in-out' }>
       <button className='log-in-out-btn'>Sign up</button>
       <button className='log-in-out-btn'>Login in</button>
       <hr />
       <button className='log-in-out-btn'>Host your home</button>
       <button className='log-in-out-btn'>Host an experince</button>
       <button className='log-in-out-btn'>Help</button>
    </div>
  )
}

export default LoginLogout