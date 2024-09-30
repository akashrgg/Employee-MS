import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
  
  const[adminTotal, setAdminTotal] = useState(0)
  const[employeeTotal, setEmployeeTotal] = useState(0)
  const[salaryTotal, setSalaryTotal] = useState(0)
  const [admins, setAdmins] = useState([])

  useEffect(()=>{
    adminCount();
    employeeCount();
    salaryCount();
    AdminRecords();
  }, [])

  const AdminRecords = () =>{
    axios.get('http://localhost:3000/auth/admin_records')
    .then(result =>{
      if(result.data.Status){
        setAdmins(result.data.Result)
      }
    })

  }

  const adminCount = () =>{
    axios.get('http://localhost:3000/auth/admin_count')
    .then(result =>{
      if(result.data.Status){
        setAdminTotal(result.data.Result[0].admin)
      }
    })
  }

  const employeeCount = () =>{
    axios.get('http://localhost:3000/auth/employee_count')
    .then(result =>{
      if(result.data.Status){
        setEmployeeTotal(result.data.Result[0].employee)
      }
    })
  }

  const salaryCount = () =>{
    axios.get('http://localhost:3000/auth/salary_count')
    .then(result =>{
      if(result.data.Status){
        setSalaryTotal(result.data.Result[0].salaryoff)
      }
    })
  }

  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Admin</h4>
            </div>
          <hr/>
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{adminTotal}</h5>
            </div>
          </div> 

          <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
            <div className='text-center pb-1'>
               <h4>Employee</h4>

            </div>
            <hr/>
            <div className='d-flex justify-content-between'><h5>Total:</h5>
            <h5>{employeeTotal}</h5>
            </div>
            </div> 
        

          <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
            <div className='text-center pb-1'>
              <h4>Salary</h4>
            </div>
            <hr/>
            <div className='d-flex justify-content-between'>
                <h5>Total:</h5>
                <h5>${salaryTotal}</h5>
            </div>
            </div>
    </div>  
    <div className='mt-4 px-5 pt-3 text-center'>
      <h4>List of Admins</h4>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            
          </tr>
        </thead>
        <tbody>
           {
            admins.map(a =>(
              <tr>
                <td>
                {a.name} 
                </td>
                <td>
                 
                  {a.email}</td>
                <td>
                  {a.Address}
                </td>
                
              </tr>
            ))
           }
        </tbody>
      </table>
      </div>    
    </div>
  )
}

export default Home