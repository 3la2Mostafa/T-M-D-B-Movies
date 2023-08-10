import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function NotFound() {
  const navigate = useNavigate() 
  const handelGoBack = ()=>{
    navigate('/Movies')
  };
  return (
    <>
      <div className="row">
      <div className="col-md-6">
        <h1 className="text-center pt-5 mt-5">404</h1>
        <h2 className="text-center">Page Not Found</h2>
        <div className="d-flex justify-content-center mt-3">
          <button onClick={handelGoBack} className="btn btn-dark rounded-pill">
          Back To Home Page
          </button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="text-center">
          <img src="/assets/images/shakal.jpg"  style={{height:'500px',width:'500px'}} alt="Page Not Found" className="rounded mt-4" />
        </div>
      </div>
    </div>
    </>
  )
}
