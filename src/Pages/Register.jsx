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
        // <div className="flex justify-center items-center min-h-screen bg-blue-100">
        //     <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        //         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        //         <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
        //         <input
        //             type="text"
        //             name="name"
        //             id="name"
        //             placeholder="Enter Your Full Name"
        //             required
        //             value={name}
        //             onChange={(e) => setName(e.target.value)}
        //             className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        //         />

        //         <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
        //         <input
        //             type="email"
        //             name="email"
        //             id="email"
        //             placeholder="Enter Your Email Id"
        //             required
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //             className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        //         />

        //         <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
        //         <input
        //             type={showPassword ? "text" : "password"}
        //             name="password"
        //             id="password"
        //             placeholder="Enter Your Password"
        //             required
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //             className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        //         />

        //         <button
        //             type="button"
        //             onClick={() => setShowPassword(!showPassword)}
        //             className="text-blue-600 text-sm mb-4"
        //         >
        //             {showPassword ? "Hide Password" : "Show Password"}
        //         </button>

        //         <button
        //             type="submit"
        //             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        //         >
        //             Register
        //         </button>

        //         <p className="mt-4 text-center text-sm">
        //             Already Have An Account?{' '}
        //             <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        //         </p>
        //     </form>
        // </div>

        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-[1.01]"
            >
                <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700 tracking-wide">
                    Create Account
                </h2>

                {/* Name Field */}
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-600">
                    Full Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-xl bg-gray-50 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />

                {/* Email Field */}
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-600">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-xl bg-gray-50 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />

                {/* Password Field */}
                <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-600">
                    Password
                </label>
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-2 border border-gray-300 rounded-xl bg-gray-50 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />

                {/* Toggle Password */}
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-blue-500 text-sm mb-4 hover:underline focus:outline-none"
                >
                    {showPassword ? "Hide Password" : "Show Password"}
                </button>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                    Register
                </button>

                {/* Redirect to Login */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </form>
        </div>

    );
};

export default Register;

