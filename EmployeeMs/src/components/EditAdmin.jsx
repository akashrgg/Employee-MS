
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditAdmin = () => {
    const {id} = useParams()
    const [admin, setAdmin] = useState({
      name: '',
      email: '',
      Address: '',
      password: "",
      
     
  });
  useEffect(()=>{
    
  axios.get('http://localhost:3000/auth/profile/'+ id )
  .then(result =>{
       setAdmin({
        ...admin,
        name: result.data.Result[0].name,
        email: result.data.Result[0].email,
        Address: result.data.Result[0].address,
        password: result.data.Result[0].password,
       

       })

  }).catch(err => console.log(err))
  }, [])
 const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.put('http://localhost:3000/auth/edit_profile/' + id, admin)
    .then(result =>{
      console.log(result.data)
      if(result.data.Status){
         navigate('/dashboard/profile')
      }else{
        alert(result.data.Error)
      }
    }).catch(err => console.log(err))
  
  }

  return (
    <div className='d-flex justify-content-center align-items-center mt-3'>
    <div className='p-3 rounded w-50 border '>
        <h3 className='text-center'>Edit Profile</h3>

        <form className='row g-1'onSubmit={handleSubmit} >

            <div className='col-12'>
                <label for="profileName" className='form-label'>Name</label>
                <input type='text' placeholder='Enter Name' id='profileName'
                    className='form-control rounded-0'
                    value={admin.name}
                     onChange={(e)=> setAdmin({...admin, name: e.target.value})} />
            </div>

            <div className='col-12'>
                <label for="profileEmail4" className='form-label'>Email</label>
                <input type='email' placeholder='Enter Email' id='profileEmail' autoComplete='off'
                    className='form-control rounded-0' 
                    value={admin.email}
                    onChange={(e)=> setAdmin({...admin, email: e.target.value})} />
            </div>


            <div className='col-12'>
                <label for="profileAddress" className='form-label'>Address</label>
                <input type='text' placeholder='1234 Main st' id='profileAddress'
                    className='form-control rounded-0'
                    value={admin.Address}
                    onChange={(e)=> setAdmin({...admin, Address: e.target.value})} />
            </div>
                

            <div className='col-12'>
                <label for="profilePassword" className='form-label'>Name</label>
                <input type='text' placeholder='Enter Name' id='profilPassword'
                    className='form-control rounded-0'
                    value={admin.password}
                     onChange={(e)=> setAdmin({...admin, password: e.target.value})} />
            </div>

            <div className='col-12'>
                <button type='submit' className='btn btn-secondary w-100'>Edit Profile</button>
            </div>


        </form>
    </div>
</div>

  )
}

export default EditAdmin