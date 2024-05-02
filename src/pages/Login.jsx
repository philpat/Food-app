import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePassword =()=>{
    setShowPassword(!showPassword)
  }
  return (
    <div className = "bg-[#121223] h-screen">
      <div className="flex flex-col justify-center items-center  h-screen px-3 md:px-0">
      <img src={logo} alt="logo" className="text-white py-2 bg-transparent" ></img>
        <div className="flex flex-col w-full max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-900">
          <form action="" className="flex flex-col gap-4">
          <div className="  text-center ">
            <h1 className=" text-4xl font-bold">Log in</h1>
            <p className="text-sm text-gray-400">Please sign in to your existing account</p>
          </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input type="email" id="email" placeholder="example@gmail.com" className="p-2 rounded bg-slate-100 "/>
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <input type={showPassword ? 'text' : 'password'}
                onChange={(event)=>setPassword(event.target.value)}
                id="password" placeholder="xxxxxxxx" className="p-2 rounded bg-slate-100 " />
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 absolute right-5 top-8 cursor-pointer"
                    onClick={togglePassword}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 absolute right-5 top-8 cursor-pointer"
                    onClick={togglePassword}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="w-4 h-4"/>
                <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
              </div>
              <a href="#" className="text-xs text-[#FF7622] hover:underline ">Forgot your password?</a>
            </div>
            <button className="bg-[#FF7622] py-2 text-white rounded-md font-semibold">LOG IN</button>
            <div className="flex items-center justify-center">
              <span className="text-gray-400">Don't have an account? </span> 
              <Link to='/signup' className="text-[#FF7622] text-sm font-semibold hover:underline pl-2"> SIGN UP</Link>
            </div>
              <div className="text-gray-400 text-center">Or </div> 
              <div className="flex justify-center items-center gap-5">
                <a href="" ><i class="fa-brands fa-facebook-f text-white   bg-blue-800 rounded-full p-3"></i></a>
                <a href="" ><i class="fa-brands fa-twitter  text-white  bg-blue-500 rounded-full p-3"></i></a>
                <a href="" ><i class="fa-brands fa-apple  text-white bg-black rounded-full p-3"></i></a>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login