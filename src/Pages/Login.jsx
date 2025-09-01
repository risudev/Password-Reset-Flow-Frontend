import axios from "axios";
import React, { useState } from "react";
import { Link, } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"

const Login = ({ setToken }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    //const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const payload = { email, password };

        try {
            const res = await axios.post('https://password-reset-flow-backend-j6hn.onrender.com/api/auth/login', payload);
            if (res.status === 200 || res.status === 201) {
                toast.success(res.data.message)
                setToken(res.data.token)
                    , {
                    position: 'top-center',
                };

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

    };

    return (
        // <div className="min-h-screen flex items-center justify-center bg-blue-100">
        //     <form
        //         onSubmit={handleSubmit}
        //         className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        //     >
        //         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        //         <div className="mb-4">
        //             <label htmlFor="email" className="block mb-1 font-medium">
        //                 Email
        //             </label>
        //             <input
        //                 type="email"
        //                 name="email"
        //                 id="email"
        //                 placeholder="Enter Your Email Id"
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 required
        //                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        //             />
        //         </div>

        //         <div className="mb-4">
        //             <label htmlFor="password" className="block mb-1 font-medium">
        //                 Password
        //             </label>
        //             <div className="relative">
        //                 <input
        //                     type={showPassword ? "text" : "password"}
        //                     name="password"
        //                     id="password"
        //                     placeholder="Enter Your Password"
        //                     value={password}
        //                     onChange={(e) => setPassword(e.target.value)}
        //                     required
        //                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        //                 />
        //                 <button
        //                     type="button"
        //                     className="absolute inset-y-0 right-3 flex items-center text-sm text-blue-500 italic"
        //                     onClick={() => setShowPassword(!showPassword)}
        //                 >
        //                     {showPassword ? "Hide" : "Show"}
        //                 </button>
        //             </div>
        //         </div>
        //         <p className="mt-2 text-right text-sm text-blue-500 hover:underline">
        //             <Link to="/forgot-password">Forgot Password?</Link>
        //         </p>


        //         <button
        //             type="submit"
        //             className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        //         >
        //             Login
        //         </button>

        //         <p className="mt-4 text-center text-sm text-gray-600">
        //             Don't have an account?{" "}
        //             <Link to="/register" className="text-blue-500 hover:underline">
        //                 Register
        //             </Link>
        //         </p>
        //     </form>
        // </div>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-[1.01]"
            >
                <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700 tracking-wide">
                    Login
                </h2>

                {/* Email Field */}
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-600">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-4 flex items-center text-sm text-blue-500 hover:underline focus:outline-none"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                {/* Forgot Password Link */}
                <p className="mb-6 text-right text-sm text-blue-500 hover:underline">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </p>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                    Login
                </button>

                {/* Link to Register */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-600 font-semibold hover:underline">
                        Register
                    </Link>
                </p>
            </form>
        </div>

    );
};

export default Login;