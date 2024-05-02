import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/navigations/Nav'
import Carousel from '../Components/carousel/Carousel'
import bgfood from '../assets/bgfood.jpg'


const Dashboard = () => {
  const images = [
    {
      src: 'https://example.com/image1.jpg',
      alt: 'Image 1',
      name: 'Image 1',
    },
    {
      src: 'https://example.com/image2.jpg',
      alt: 'Image 2',
      name: 'Image 2',
    },
    {
      src: 'https://example.com/image3.jpg',
      alt: 'Image 3',
      name: 'Image 3',
    },
    {
      src: 'https://example.com/image4.jpg',
      alt: 'Image 1',
      name: 'Image 1',
    },
    {
      src: 'https://example.com/image5.jpg',
      alt: 'Image 2',
      name: 'Image 2',
    },
    {
      src: 'https://example.com/image6.jpg',
      alt: 'Image 3',
      name: 'Image 3',
    }

  ]
  return (
    <div>
      <Nav />
      <div className=' py-8 h-screen bg-cover bg-slate-800 text-white bg-blend-overlay opacity-90 flex flex-col justify-center items-center text-center' style={{ backgroundImage: `url(${bgfood})` }}>
        <div className='text-2xl'>

        <p>We serve and Deliver all sort of delicacies</p>
        <button className='bg-[#FF7622] py-2 px-3 my-3 rounded shadow-md'>Order Now</button>
        </div>
      </div>
      <div>
          {/* <h1 className='text-xl font-semibold'>Welcome Halel, Good afternoon!</h1> */}
          <div className='flex justify-between flex-1 py-8 px-5'>
            <p>View Categories</p>
            <div className='flex flex-row'>
              <Link to='/category' className=' flex'><span>See All </span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg></Link>
            </div>
          </div>
          <Carousel images={images}  />
        </div>
        <div className='py-8'>
          <div className='flex justify-between flex-1 py-8 px-5'>
            <p>View Restuarant</p>
            <div className='flex flex-row'>
              <Link to='/restaurant' className=' flex'><span>See All </span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg></Link>
            </div>
          </div>
          <div>
            
          </div>
        </div>
    </div>
  )

}
export default Dashboard