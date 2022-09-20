import { useState } from 'react';
import {Link} from 'react-router-dom';
import { REGISTER_USER } from '../../mutations/userMutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
function SignUp() {
    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phone: '',
        password: '',
    })
    const { firstName, lastName, address, email, phone, password } = credentials
    const [confirm, setConfirm] = useState('')
    const navigate = useNavigate()
    const [register] = useMutation(REGISTER_USER,{
        variables:{firstName, lastName, address, email, phone, password}
    })

    const handleCredentials = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(password!==confirm){
            alert('Password do not match')
            return;
        }
         
        try{
             await Promise.all([register(firstName, lastName, address, email, phone, password)])
            // console.log(result[0])
                navigate('/')
    
        }catch(error){
            alert(error)
        }
        
    }
    // console.log(credentials)
    return (
        <>
            <h3 className="text-center text-uppercase">Sign Up</h3>
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-60">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" >
                            <div className="card-body p-4 p-md-5">
                                <form>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <input type="text"
                                                value={credentials.firstName}
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    className="form-control form-control-lg"
                                                    onChange={handleCredentials}
                                                />

                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <input type="text"
                                                value={credentials.lastName}
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    className="form-control form-control-lg"
                                                    onChange={handleCredentials}
                                                />

                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 mb-4 d-flex align-items-center">

                                            <div className="form-outline w-100">
                                                <input type="text"
                                                    value={credentials.address}
                                                    placeholder="Address"
                                                    className="form-control form-control-lg"
                                                    name="address"
                                                    onChange={handleCredentials}
                                                />

                                            </div>

                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <input type="email"
                                                value={credentials.email}
                                                    name="email"
                                                    placeholder="Email"
                                                    className="form-control form-control-lg"
                                                    onChange={handleCredentials}
                                                />

                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <input type="tel"
                                                    value={credentials.phone}
                                                    name="phone"
                                                    placeholder="Phone"
                                                    className="form-control form-control-lg"
                                                    onChange={handleCredentials}
                                                />

                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 mb-4 pb-2">

                                            <div className="form-outline">
                                                <input type="password"
                                                    value={credentials.password}
                                                    name="password"
                                                    placeholder='Password'
                                                    className="form-control form-control-lg"
                                                    onChange={handleCredentials}
                                                />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 mb-4 pb-2">

                                            <div className="form-outline">
                                                <input type="password"
                                                    value={confirm}
                                                    placeholder='Confirm Password'
                                                    className="form-control form-control-lg"
                                                    onChange={(e)=>setConfirm(e.target.value)}
                                                />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center mt-2 pt-2">
                                        <button className="btn btn-primary btn-lg text-uppercase" onClick={handleSubmit}>Register</button>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center mt-2 pt-2">
                                        <p>Already have an account? <Link to="/">Sign In</Link> </p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp
