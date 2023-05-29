import React from 'react'

export default function NewUser() {
  return (
    <>
    <section className="content-wrapper pt-2">
      <div className="container-fluid">
    <div className="card card-primary">
  <div className="card-header">
    <h3 className="card-title">Create User</h3>
  </div>
  <form>
    <div className="card-body ">
    <div className="user-panel mt-1 pb-1 mb-1 d-flex justify-content-center ">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"style={{ width: '100px', height: '100px' }} />
      </div>
      <div className='info text-primary'>
      <label htmlFor="exampleInputFile"><i className="fa-solid fa-upload"></i></label>
      </div>
      
    </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <div className="form-group">
                  <label htmlFor="exampleSelectBorder">Gender</label>
                  <select className=" form-select form-control" id="exampleSelectBorder">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
    </div>
    <div className="card-footer d-flex justify-content-center">
     <button type="submit" className="btn btn-primary">Create</button>
    </div>
  </form>
  </div>
 
  </div>
  </section>
    </>
  )
}
