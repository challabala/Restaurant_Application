import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const LoginAccount = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Email field is required!');
            return;
        }
        if (!password) {
            toast.error('Password field is required!');
            return;
        }
        try {
            setIsSubmitting(true);
            const response = await axios.post("http://localhost:3008/login", {
                email: email,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response && response.data.status === "success") {
                localStorage.setItem("login_data", JSON.stringify(response.data));
                // localStorage.setItem("userId", response.data._id); 
                // console.log(response.data._id)
                toast.success("Login successful!");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                toast.error(response.data.message || "Login failed. Please check your credentials and try again.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("An error occurred during login. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="lcontainer">
            <ToastContainer />
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card bg-transparent position-relative">
                        <div className="card-body">
                            <h2 className="card-title text-center text-white">Login</h2>
                            <form onSubmit={LoginAccount}>
                                <div className="form-group py-2">
                                    <label className='text-light' htmlFor="email">Email :</label>
                                    <input 
                                        onChange={(event) => setEmail(event.target.value)} 
                                        type="text" 
                                        placeholder="Enter Email or Number" 
                                        className="form-control" 
                                        name="email"
                                        required 
                                        disabled={isSubmitting} />
                                </div>
                                <div className="form-group py-2">
                                    <label className='text-light' htmlFor="password">Enter your password:</label>
                                    <input 
                                        onChange={(event) => setPassword(event.target.value)} 
                                        type="password"  
                                        placeholder="Enter password" 
                                        className="form-control" 
                                        name="password"
                                        required 
                                        disabled={isSubmitting} />
                                </div>
                                <div className="form-group py-2">
                                    <button 
                                        type="submit" 
                                        className="btn btn-warning btn-block w-100"
                                        disabled={isSubmitting}>
                                        {isSubmitting ? 'Logging in...' : 'Login'}
                                    </button>
                                </div>
                            </form>
                            <p className="fine-print text-center text-light">
                                By continuing, you agree to Restaurant's Conditions of Use and Privacy Notice.
                            </p>
                            <p className="fine-print text-center text-light">
                                Need help? <a href="#">Buying for work?</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
