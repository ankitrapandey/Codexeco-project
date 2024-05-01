import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='h-[10vh] lg:w-full w-[94%] bg-white  '>
        <div>
          <ul className='flex gap-2 pt-4   '>
            <li className='text-3xl px-4 text-yellow-600 '>CODEXECO</li>
            <li className='text-2xl text-orange-700 hidden md:inline-block'>Home</li>
            <li className='text-2xl hidden md:inline-block'>About</li>
            <li className='text-2xl hidden md:inline-block'>Contact</li>
            <li className='pl-[40rem] pt-3 hidden md:inline-block'><i class="fa-solid fa-user h-6 w-6 text-center bg-green-700 rounded-full "></i> login</li>
            <li className='pt-3 hidden md:inline-block'><i class="fa-solid fa-arrow-right-to-bracket h-6 w-6 text-center bg-green-700 rounded-full" ></i> SignUp</li>
            <i class="fa-solid fa-bars text-2xl pl-[8rem]  block md:hidden "></i>


          </ul>
        </div>

      </div>
    </>
  )
}

export default Navbar
