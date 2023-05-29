import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
 {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Admin Template</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    
  
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item ">
          <Link to="/" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
             
            </p>
          </Link>
        </li>
        <li className="nav-item ">
          <Link to="/users" className="nav-link ">
          <i class="nav-icon fa-solid fa-users"></i>
            <p>
              Users             
            </p>
          </Link>
        </li>
        
       
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    </>
  )
}
