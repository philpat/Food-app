import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword1, setShowPassword1] = useState(false)
  const togglePassword =()=>{
    setShowPassword(!showPassword)
  }
  const togglePasswordConfirm =()=>{
    setShowPassword1(!showPassword1)
  }
  return (
    <div className = "bg-[#121223] h-screen">
      <div className="flex flex-col justify-center items-center  h-screen px-3 md:px-0">
      <img src={logo} alt="logo" className="text-white py-2 bg-transparent" ></img>
        <div className="flex flex-col w-full max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-900">
          <form action="" className="flex flex-col gap-3">
          <div className=" text-center ">
            <h1 className=" text-3xl font-bold">SIGN UP</h1>
            <p className="text-sm text-gray-400">Please sign in to get started</p>
          </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input type="text" id="name" placeholder="John doe" className="p-2 rounded bg-slate-100 "/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input type="email" id="email" placeholder="example@gmail.com" className="p-2 rounded bg-slate-100 "/>
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <input type={showPassword ? 'text': 'password'} id="password" placeholder="xxxxxxxx" className="p-2 rounded bg-slate-100 "/>
              <i className={`fa-regular fa-eye${showPassword ? '-slash' : ''} absolute right-5 top-8 cursor-pointer`}
              onClick={togglePassword}
              ></i>
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="confirmpassword" className="text-sm font-medium">Re-type Password</label>
              <input type={showPassword1 ? 'text': 'password'} id="password" placeholder="xxxxxxxx" className="p-2 rounded bg-slate-100 "/>
              <i className={`fa-regular fa-eye${showPassword1 ? '-slash' : ''} absolute right-5 top-8 cursor-pointer`}
              onClick={togglePasswordConfirm}
              ></i>
            </div>
            
            <button className="bg-[#FF7622] py-2 text-white rounded-md font-semibold">SIGN UP</button>
            <div className="flex items-center justify-center">
              <span className="text-gray-400">Already have an account? </span> 
              <Link to='/' className="text-[#FF7622] text-sm font-semibold hover:underline pl-2"> Login</Link>
            </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Signup