import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const res = await axios.post(
                "https://password-reset-flow-backend-j6hn.onrender.com/api/auth/forgot-password",
                { email }
            );
            if (res.status === 200 || res.status === 201) {
                toast.success(res.data.message),
                    navigate("/login"),
                {
                    position: "top-center",
                };
            } else {
                toast.error("Registration Failed!", {
                    position: "top-center",
                });
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!", {
                position: "top-center",
            });
        }
    };
    return (
        // <div className="min-h-screen flex items-center justify-center bg-blue-100">
        //     <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        //         <form onSubmit={handleSubmit}>
        //             <div className="mb-4">
        //                 <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
        //                     Email Id
        //                 </label>
        //                 <input
        //                     type="email"
        //                     id="email"
        //                     className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        //                     placeholder="Enter Your Email Id"
        //                     required
        //                     onChange={(e) => setEmail(e.target.value)}
        //                 />
        //             </div>
        //             <button
        //                 type="submit"
        //                 className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        //             >
        //                 Send
        //             </button>
        //         </form>
        //     </div>
        // </div>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-[1.01]">
                <h2 className="text-2xl font-extrabold mb-6 text-center text-blue-700 tracking-wide">
                    Forgot Password
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                            placeholder="Enter Your Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
                    >
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>

    );
};

export default ForgotPassword;