import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const AddEmployee = () => {
    const navigate = useNavigate()
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        password: '',
        salary: '',
        address: '',
        category_id: '',
        IdCard: "",
    });

    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/auth/category')
            .then(result => {


                if (result.data.Status) {

                    setCategory(result.data.Result)
                }
                else {
                    alert(result.data.Error)
                }
            }).catch(err => console.log(err))

    }, [])
/* for image

<div className='col-12 mb-3'>
                        <label for="inputGroupFile01" className='form-label'>Select Image</label>
                        <input type='file' id='inputGroupFile01'
                            className='form-control rounded-0' name="image" 
                            onChange={(e)=> setEmployee({...employee, image: e.target.files[0]})} />
                    </div>
*/
    const handleSubmit =(e)=>{
        e.preventDefault()

        const formData = new FormData();   
        formData.append('name', employee.name);
        formData.append('email', employee.email);
        formData.append('password', employee.password);
        formData.append('address', employee.address);
        formData.append('salary', employee.salary);
        formData.append('IdCard', employee.IdCard);
        formData.append('category_id', employee.category_id); 

       axios.post('http://localhost:3000/auth/add_employee', employee)
        
        .then(result =>{
        if(result.data.Status){
          navigate('/dashboard/employee')

        }else{
            alert(result.data.Error)
        }
       })
       .catch(err => console.log('Response:',err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center mt-3'>
            <div className='p-3 rounded w-50 border '>
                <h3 className='text-center'>Add Employee</h3>

                <form className='row g-1' onSubmit={handleSubmit}>

                    <div className='col-12'>
                        <label for="inputName" className='form-label'>Name</label>
                        <input type='text' placeholder='Enter Name' id='inputName'
                            className='form-control rounded-0'
                             onChange={(e)=> setEmployee({...employee, name: e.target.value})} />
                    </div>

                    <div className='col-12'>
                        <label for="inputEmail4" className='form-label'>Email</label>
                        <input type='email' placeholder='Enter Email' id='inputEmail' autoComplete='off'
                            className='form-control rounded-0' 
                            onChange={(e)=> setEmployee({...employee, email: e.target.value})} />
                    </div>

                    <div className='col-12'>
                        <label for="inputPassword4" className='form-label'>Password</label>
                        <input type='password' placeholder='Enter Password' id='inputPassword'
                            className='form-control rounded-0'
                            onChange={(e)=> setEmployee({...employee, password: e.target.value})} />

                        <label for="inputSalary" className='form-label'>Salary</label>
                        <input type='text' placeholder='Enter Salary' id='inputSalary' autoComplete='off'
                            className='form-control rounded-0' 
                            onChange={(e)=> setEmployee({...employee, salary: e.target.value})} />
                    </div>

                    <div className='col-12'>
                        <label for="inputAddress" className='form-label'>Address</label>
                        <input type='text' placeholder='1234 Main st' id='inputAddress'
                            className='form-control rounded-0'
                            onChange={(e)=> setEmployee({...employee, address: e.target.value})} />
                    </div>

                    <div className='col-12'>
                        <label for="category" className='form-label'>Category</label>
                        <select name='category' id='category' className='form-select'
                        onChange={(e)=> setEmployee({...employee, category_id: e.target.value})}>
                            {
                                category.map(c => {
                                    return <option value={c.id}>{c.name}</option>
                                }

                                )
                            }

                        </select>
                    </div>
                    <div className='col-12'>
                        <label for="inputIdCard" className='form-label'>IDCard No</label>
                        <input type='text' placeholder='EMP001, EMP002, etc.' id='inputIdCard'
                            className='form-control rounded-0'
                            onChange={(e)=> setEmployee({...employee, IdCard: e.target.value})} />
                    </div>
                    
                    <div className='col-12'>
                        <button type='submit' className='btn btn-secondary w-100'>Add Employee</button>
                    </div>


                </form>
            </div>
        </div>


    )
}

export default AddEmployee