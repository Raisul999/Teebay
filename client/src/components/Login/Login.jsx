import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { LOGIN_USER } from '../../mutations/userMutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login] = useMutation(LOGIN_USER, {
        variables: { email, password }
    });
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (email === '' || password === '') {
            alert('Please fill in all fields')
            return
        }
        try {
            const result = await Promise.all([login(email, password)])
            // console.log(result[0])

            if (result[0].data.login) {
                // console.log('inside', data.login)

                localStorage.setItem('user', JSON.stringify(result[0].data.login))
            }
            if (result[0].data.login.email !== '') {
                navigate('/myProducts')
            }
        }catch(error){
            alert(error)
        }

    }

    return (
        <div>
            <h3 className="text-center text-uppercase">Sign In</h3>
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-60">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration w-60" >
                            <div className="card-body p-4 p-md-5">
                                <form>
                                    <div className="row">
                                        <div className="col-md-12 mb-4">

                                            <div className="form-outline">
                                                <input type="text"
                                                    value={email}
                                                    placeholder="Email"
                                                    className="form-control form-control-lg"
                                                    name="address"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="row">
                                        <div className="col-12 mb-4 pb-2">

                                            <div className="form-outline">
                                                <input type="password"
                                                    value={password}
                                                    name="password"
                                                    placeholder='Password'
                                                    className="form-control form-control-lg"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>

                                        </div>
                                    </div>


                                    <div className="d-flex justify-content-center align-items-center mt-2 pt-2">
                                        <button className="btn btn-primary btn-lg text-uppercase" onClick={handleSubmit}>Login</button>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center mt-2 pt-2">
                                        <p>Don't have have an account? <Link to="/register">Sign Up</Link> </p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
