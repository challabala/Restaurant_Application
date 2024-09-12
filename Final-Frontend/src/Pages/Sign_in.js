import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Sign.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CgWindows } from 'react-icons/cg';

const Sign_in = () => {
    const [username, setUsername] = useState('');
    // const [firstname, setFirstname] = useState('');
    // const [Lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const CreateAccount = async () => {

        if (!username || !email || !phone || !password || !address) {
            toast.error("All fields are required!");
            return;
        }
        try {
            const data = {
                username,
                // firstname,
                // lastname: Lastname,
                email,
                phone,
                password,
                address
            };

            const response = await axios.post("http://localhost:3008/signin", data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.status === "success") {
                toast.success("Account created successfully!");
                setTimeout(() => {
                    window.location.replace("/login");
                }, 2000);
            } else {
                toast.error(response.data.message || "Failed to create account.");
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error("User already registered. Please login!");
                
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            } else {
                toast.error("There was an error with the request!");
            }
        }
    };

    return (
        <div className="scontainer">
            <ToastContainer />
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card bg-transparent position-relative">
                        <div className="card-body">
                            <h2 className="card-title text-center">Create Account</h2>
                            <div className="form-group py-2">
                                <label htmlFor="username">Enter username</label>
                                <input
                                    onChange={(event) => setUsername(event.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="User name"
                                    required
                                />
                            </div>
                            {/* <div className="form-group py-2">
                                <label htmlFor="firstname">Your first name</label>
                                <input
                                    onChange={(event) => setFirstname(event.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="firstname"
                                    placeholder="First name"
                                />
                            </div>
                            <div className="form-group py-2">
                                <label htmlFor="lastname">Your last name</label>
                                <input
                                    onChange={(event) => setLastname(event.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="lastname"
                                    placeholder="Last name"
                                />
                            </div> */}
                            <div className="form-group py-2">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    required
                                />
                            </div>
                            <div className="form-group py-2">
                                <label htmlFor="mobile">Mobile number</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">IN +91</span>
                                    </div>
                                    <input
                                        onChange={(event) => setPhone(event.target.value)}
                                        type="number"
                                        className="form-control"
                                        id="mobile"
                                        placeholder="Enter your mobile number"
                                    />
                                </div>
                            </div>
                            <div className="form-group py-2">
                                <label htmlFor="password">Password</label>
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form-group py-2">
                                <label htmlFor="address">Your address</label>
                                <input
                                    onChange={(event) => setAddress(event.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="form-group py-2">
                                <button onClick={CreateAccount} className="btn btn-warning btn-block w-100 pt-2">
                                    Create your account
                                </button>
                            </div>
                            <div className="d-flex">
                                <hr className="w-25" />
                                <p className="ms-5">Already have an Account</p>
                                <hr className="w-25 ms-5" />
                            </div>
                            <div className="form-group py-2">
                                <Link to="/login">
                                    <button type="submit" className="btn btn-primary btn-block w-100 pt-2">
                                        Login
                                    </button>
                                </Link>
                            </div>
                            <p className="fine-print text-center">
                                To verify your number, we will send you a text message with a temporary code. Message and
                                data rates may apply.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sign_in;
