import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

import axios from "axios"
const EmployeeDetail = () => {
const navigate = useNavigate()
  const {id} = useParams()

  const [employee, setEmployee] = useState([])

  useEffect(()=>{

    axios.get('http://localhost:3000/employee/detail/'+id)
    .then(result => {
      setEmployee(result.data[0])
    })
    .catch(err => console.log(err))

  }, [])

  const handleLogout = () =>{
    axios.get('http://localhost:3000/employee/logout')
    .then(result => {
      if(result.data.Status){
        localStorage.removeItem("valid")
        navigate('/')
      }
    }).catch(err => console.log(err))
  }
// <button className='btn btn-primary me-2'>Edit</button> for Edit
//<img src = {`http:// localhost:3000/Images/` + employee.image} className='emp_det_image' alt='Loading...'/> for image
  return (
    <div>
      <div className='p-2 d-flex justify-content-center shadow'>
        <h4>Employee Management System</h4>
      </div>
      <div className='d-flex justify-content-center flex-column algin-items-center mt-3'>
        
        <div className='d-flex align-items-center flex-column mt-5'>
          <h3>IDCard No:{employee.IdCard}</h3>
          <h3>Name: {employee.name}</h3>
          <h3>Email: {employee.email}
          </h3>
          <h3>Salary: ${employee.salary}</h3>
        </div>
        <div className='d-flex justify-content-center  algin-items-center mt-3' >
        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
          
        </div>
      </div>
  </div>
  )
}

export default EmployeeDetail