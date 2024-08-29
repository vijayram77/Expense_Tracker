import { useGSAP } from '@gsap/react';
import gsap, { Elastic, Power3 } from 'gsap';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const LoginSignup = () => {

    useGSAP(() => {
        gsap.from(".wrapper",{
            left : "100%",
            ease : Power3 ,
            duration : 1
        })

    })

    const [toggle, setToggle] = useState("Signup");

    const Navigate = useNavigate();
    
    // State for signup inputs
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: ''
    });

    // State for login inputs
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    // Handle input changes for signup
    const handleSignupChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    // Handle input changes for login
    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    // Toggle between Signup and Login
    const Togglefunction = () => {
        setToggle(toggle === "Signup" ? "Login" : "Signup");
    };

    // Handle Signup
    const handleSignup = (e) => {
        e.preventDefault();
        localStorage.setItem(signupData.username, JSON.stringify(signupData));
        alert("Registration successful!");
        setToggle("Login"); // Automatically switch to login after signup
    };

    // Handle Login
    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = localStorage.getItem(loginData.username);
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.password === loginData.password) {
                alert("Login successful!");
                // console.log(userData);
                localStorage.setItem("Current" , userData.username)
                // console.log(localStorage.getItem("Current"));
                
                Navigate("/Home");
            } else {
                alert("Incorrect password");
            }
        } else {
            alert("User not found");
        }
    };

    return (
        <div className='w-full h-screen flex justify-center items-center bg-[#101010]'>
            {toggle === "Signup" ? (
                <div className="wrapper relative w-[330px] p-4 pt-8 bg-[#202020] rounded-lg text-center shadow-[0_20px_35px_rgba(0,0,0,0.1)]">
                    <div className="absdiv absolute bg-[#202020] left-0 hidden top-0 w-full h-full"></div>
                    <h1 className="text-3xl text-[#e4e3e3] font-bold">Hey there!</h1>
                    <p className="mb-7 text-zinc-400">Please register to <br /> Continue!</p>
                    <form onSubmit={handleSignup}>
                        <input
                            className="w-[85%] outline-none border-none bg-[#303030] p-3.5 mb-2.5 rounded-lg text-white"
                            type="text"
                            maxLength={6}
                            name="username"
                            placeholder="Enter username"
                            value={signupData.username}
                            onChange={handleSignupChange}
                            required
                        />
                        <input
                            className="w-[85%] outline-none border-none bg-[#303030] p-3.5 mb-2.5 rounded-lg text-white"
                            type="text"
                            name="email"
                            placeholder="Enter email"
                            value={signupData.email}
                            onChange={handleSignupChange}
                            required
                        />
                        <input
                            className="w-[85%] outline-none border-none bg-[#303030] p-3.5 mb-2.5 rounded-lg text-white"
                            type="password"
                            name="password"
                            placeholder="Create Password"
                            value={signupData.password}
                            onChange={handleSignupChange}
                            required
                        />
                        <button 
                            type="submit" 
                            className="text-white font-semibold bg-violet-700 text-xl mt-4 py-2 rounded-md outline-none border-none w-[85%] cursor-pointer hover:bg-violet-500"
                        >
                            Sign up
                        </button>
                    </form>
                    <p className="or text-zinc-300 text-sm mt-6">----- or continue with -----</p>
                    <div className="not-member text-zinc-300 text-sm mt-5">
                        Already a user? 
                        <a 
                            className="text-purple-600 cursor-pointer ml-2 hover:underline" 
                            onClick={Togglefunction}
                        >
                            Login
                        </a>
                    </div>
                </div>
            ) : (
                <div className="wrapper w-[330px] p-4 pt-8 bg-[#202020] rounded-lg text-center shadow-[0_20px_35px_rgba(0,0,0,0.1)]">
                    <h1 className="text-3xl text-[#e4e3e3] font-bold">Welcome Back!</h1>
                    <p className="mb-7 text-zinc-400">Hello again! you've <br /> been missed!</p>
                    <form onSubmit={handleLogin}>
                        <input
                            className="w-[85%] outline-none border-none bg-[#303030] p-3.5 mb-2.5 rounded-lg text-white"
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            value={loginData.username}
                            onChange={handleLoginChange}
                            required
                        />
                        <input
                            className="w-[85%] outline-none border-none bg-[#303030] p-3.5 mb-2.5 rounded-lg text-white"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            required
                        />
                        <p className="recover text-right text-xs mt-0.5 mr-7 text-zinc-400">
                            <a href="#" className="text-violet-500">Recover Password</a>
                        </p>
                        <button 
                            type="submit" 
                            className="text-white font-semibold bg-violet-600 text-xl mt-4 py-2 rounded-md outline-none border-none w-[85%] cursor-pointer hover:bg-violet-500"
                        >
                            Sign in
                        </button>
                    </form>
                    <p className="or text-zinc-300 text-sm mt-6">----- or continue with -----</p>
                    <div className="not-member text-zinc-300 text-sm mt-5">
                        Not a member? 
                        <a 
                            className="text-purple-600 ml-2 cursor-pointer hover:underline" 
                            onClick={Togglefunction}
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LoginSignup;
