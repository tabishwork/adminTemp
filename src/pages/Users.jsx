import React from 'react'
import { Link } from 'react-router-dom'

export default function Users() {

  return (
    <>
 
  <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <Link to="/newUser" className="col-sm-6 ">
          <button type="button" class="btn btn-primary">Create</button>
        </Link>
       
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Users List</h3>
      </div>
      {/* /.card-header */}
      <div className="card-body">
        <div id="jsGrid1" />
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </section>
  {/* /.content */}
</div>


    </>
  )
}
