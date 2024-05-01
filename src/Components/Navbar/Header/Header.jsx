import React from 'react'



const Header = () => {
  return (
    <>
      <div>
        <div className=' bg-[url(https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] lg:h-[100vh] lg:w-full w-auto  h-[100vh] bg-no-repeat bg-cover bg-center brightness-90'>
          <div className=''>
            <h1 className='lg:text-5xl text-white text-3xl text-center lg:pt-[10rem] '>Welcome To Travel Gate And Tours Nigerian Ltd!</h1>
            <p className='text-2xl text-white text-center pt-2'>Peral island Hotel & resort</p>
          </div>
          <div className='lg:flex justify-center items-center'>
            <div className=' lg:h-[10vh] lg:w-[25vw] h-20  w-full bg-white lg:border-r-2 border-gray-700 lg:mt-3 mt-3'></div>
            <div className='lg:h-[10vh] lg:w-[25vw] h-20  bg-white lg:border-r-2 border-gray-700 lg:mt-3 mt-3'></div>
            <div className='lg:h-[10vh] lg:w-[25vw] h-20 w-full bg-white lg:border-r-2 border-gray-700 lg:mt-3 mt-3'></div>
            <button className='lg:h-[10vh] lg:w-[10vw] h-20 w-full bg-orange-700 text-white text-center lg:mt-3 mt-3'>Book Now</button>
          </div>
        </div>
      </div>


    </>
  )
}

export default Header;
