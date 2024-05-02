import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';


const Nav = () => {
  const navigation = [
    { name: 'Home', to: '/dashboard', current: true },
    { name: 'Category', to: '/category', current: false },
    { name: 'Restaurant', to: '/restaurant', current: false },
    // { name: 'Cart', to: '/cart', current: false },
  ]
  return (
    <div>
      <div className='flex items-center justify-between gap-5 p-4  shadow-md bg-white w-full'>
        <div>
          <img src={logo} alt="logo" className='w-20'></img>
        </div>
        <div className='flex items-center'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className='text-primary-05 hover:bg-[#FF7622] hover:text-white hover:shadow  rounded-md px-3 py-2 font-medium'
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
          <Link to='/cart'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</Link>
        </div>
      </div>

    </div>
  )
}

export default Nav