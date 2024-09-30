
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Profile = () => {
  
  const [admin, setAdmin] = useState([]) 
  useEffect(()=>{

    axios.get('http://localhost:3000/auth/profile')
    .then(result => {


      if (result.data.Status) {

        setAdmin(result.data.Result)
      }
      else {
        alert(result.data.Error)
      }
    }).catch(err => console.log(err))
   
  }, [])

  
 /* const AdminRecords = () =>{
    axios.get('http://localhost:3000/auth/admin_records')
    .then(result =>{
      if(result.data.Status){
        setAdmins(result.data.Result)
      }
    })

  }*/




  const navigate = useNavigate()
  

/* <form className='row g-1'>

            <div className='col-12'>
                <label for="AdminName" className='form-label'>Name</label>
                <input type='text' placeholder='Enter Name' id='AdminName'
                    className='form-control rounded-0'
                    
                      />
            </div>

            <div className='col-12'>
                <label for="AdminEmail4" className='form-label'>Email</label>
                <input type='email' placeholder='Enter Email' id='AdminEmail' autoComplete='off'
                    className='form-control rounded-0' 
                    
                     />
            </div>

            <div className='col-12'>
                <label for="AdminAddress" className='form-label'>Address</label>
                <input type='text' placeholder='1234 Main st' id='AdminAddress'
                    className='form-control rounded-0'
                    
                    />
            </div>

            

            <div className='col-12'>
               <button className='btn btn-secondary w-100' >Edit Profile</button>
            </div>


        </form>*/
  return (
    <div className='d-flex justify-content-center align-items-center mt-3'>
    <div className='p-3 rounded w-50 border '>
        <h3 className='text-center'>Admin Profile</h3>
        <div className='mt-4 px-10 pt-3 text-center'>
      
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
           {
            admin.map(a =>(
              <tr>
                <td>
                {a.name} 
                </td>
                <td>{a.Address}</td>
                <td>
                 
                  {a.email}</td>
                  
                  <td>
                  <Link to={`/dashboard/edit_profile/`+ a.id } className='btn btn-info btn-sm me-2'>Edit</Link>
                    
                  </td>
                
              </tr>
            ))
           }
        </tbody>
      </table>
      </div>    

       
    </div>
</div>
  )
}

export default Profile
