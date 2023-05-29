import React from 'react'

export default function Navbar() {
  return (

<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links. */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    
  </ul>
 
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
  <div className="user-panel mt-1 pb-1 mb-1 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className='info'>
      <a href="#" >Admin Name</a>
      </div>
      
    </div>
    
  </ul>

  
</nav>


  )
}
