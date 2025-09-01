import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { name, email, password };

        try {
            const res = await axios.post('https://password-reset-flow-backend-j6hn.onrender.com/api/auth/register', payload);
            if (res.status === 200 || res.status === 201) {
                toast.success(res.data.message), {
                    position: 'top-center',
                };
                navigate('/login')
            } else {
                toast.error('Registration Failed!', {
                    position: 'top-center',
                });
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong!', {
                position: 'top-center',
            });
        }
        setEmail("")
        setPassword("")
        setName("")
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Full Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email Id"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-blue-600 text-sm mb-4"
                >
                    {showPassword ? "Hide Password" : "Show Password"}
                </button>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Register
                </button>

                <p className="mt-4 text-center text-sm">
                    Already Have An Account?{' '}
                    <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;

