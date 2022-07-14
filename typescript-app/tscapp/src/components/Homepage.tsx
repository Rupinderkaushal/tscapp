import React from 'react'
import {Link} from 'react-router-dom';
const Homepage = () => {
  return (
    <div className='homepage'>
         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"90%",margin:"auto"}}>
          <div>
            <h1>Logo</h1>
          </div>
          <div style={{width:"50%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <Link to='/'>Home</Link>
            <Link to='/about'>AboutUs</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
         </div>
    </div>
  )
}

export default Homepage