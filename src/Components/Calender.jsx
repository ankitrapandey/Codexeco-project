import React from 'react'

const Calender = () => {
  return (
   <>
   <div className='flex justify-center items-center  mt-[15rem] absolute  '>
      <div className='h-[9vh] w-[25vw] bg-white flex justify-center '>
        
          <i class="fa-solid fa-location-dot lg:text-xl ml-3 mt-6"></i>
           <select className='text-xl'>
            <option value="AP">Andhra Pradesh</option>
            <option value="AR">Arunachal Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="CT">Chhattisgarh</option>
            <option value="GA">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jammu and Kashmir</option>
            <option value="GA">Goa</option>
            <option value="JH">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MN">Manipur</option>
            <option value="ML">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="OR">Odisha</option>
            <option value="PB">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TG">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UT">Uttarakhand</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="WB">West Bengal</option>
            <option value="AN">Andaman and Nicobar Islands</option>
            <option value="CH">Chandigarh</option>
            <option value="DN">Dadra and Nagar Haveli</option>
            <option value="DD">Daman and Diu</option>
            <option value="DL">Delhi</option>
            <option value="LD">Lakshadweep</option>
            <option value="PY">Puducherry</option>
          </select> *
       
      </div>

      {/* calender section  */}

     <div className=' lg:mt-3 lg:h-[9vh] h-[12vh] lg:w-[39vw] bg-white lg:flex border border-r-2 border-gray-500 mt-3 flex justify-center items-center'>
         <p><i class="fa-regular fa-calendar pl-1 pt-7"></i> </p>
        <div className=''>
          <div>
            <p className="text-center">From - To</p>
            <div className="text-center lg:flex w-full ml-3 ">
              <DatePicker className='bg-orange-600 text-white '
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate} dateFormat="dd-MM-yyyy" renderDayContents={renderDayContents} minDate={new Date()} />
              <div>
                <DatePicker className='bg-orange-600 text-white lg:ml-0.5  '
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd-MM-yyyy"
                  renderDayContents={renderDayContents}
                  minDate={new Date()}
                />
              </div>
            </div>
          </div>
        </div> 
      </div>  

      {/* adult section */}

      <div className=''>
        <div className='text-black bg-white lg:h-[9vh] lg:w-[20vw] mt-3 border border-3 border-blue-700'>
          <p className="text-center">Guests</p>
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="" onClick={toggleDropdown}>
                <i className="fa-regular fa-user cursor-pointer"></i>&nbsp;
                {adults} Adult{adults !== 1 ? 's' : ''} - {children} Child{children !== 1 ? 'ren' : ''}
                <i className={`fa-solid fa-caret-${isOpen ? 'up' : 'down'} cursor-pointer`}></i>
              </div>
              {isOpen && (
                <div className="absolute ml-[-3rem] ">
                  <div className=" ">
                    <div>
                      <label>Adults:</label>
                      <input type="number" value={adults} onChange={(e) => handleAdultsChange(parseInt(e.target.value))} />
                    </div>
                    <div>
                      <label>Children:</label>
                      <input type="number" value={children} onChange={(e) => handleChildrenChange(parseInt(e.target.value))} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=' lg:mt-3 h-[9vh] lg:w-[10vw] w-full bg-orange-600 text-center pt-4 mt-3'>
        <button className='text-1xl text-white '>Book Now</button>
      </div> 

    </div>
   </>
  )
}

export default Calender




{/* <nav class="lg:bg-white-800 overflow-hidden border-2 border-blue-500 ">
<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
  <div class="hidden sm:ml-6 sm:block">
    <div class="flex space-x-4 ">
      {/* <img src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg" alt="" className='h-[10vh] w-[10vw]' /> */}
//       <h1 className='text-5xl text-yellow-600'>CODEXECO</h1>
//       <a href="" class=" text-orange-500 rounded-md pt-6  px-3 py-2 text-sm font-medium">Home</a>
//       <a href="" class="text-black rounded-md px-3  pt-6 py-2 text-sm font-medium">About</a>
//       <a href="" class="text-black rounded-md px-3  pt-6 py-2 text-sm font-medium">Contact</a>
//       <a href="" class="text-black rounded-md px-3 pl-[40rem] pt-6 py-2 text-sm font-medium"><i class="fa-solid fa-user"></i> Login</a>
//       <a href="" class="text-black rounded-md px-3  pt-6 py-2 text-sm font-medium"><i class="fa-solid fa-arrow-right-to-bracket " ></i> sign</a>
//     </div>
//   </div>
// </div>
 
// <div class="sm:hidden" id="mobile-menu">
// <div class="space-y-1 px-2 pb-3 pt-2 flex ">
// <h1 className='text-5xl text-yellow-600 pt-3'>CODEXECO</h1>
// <i class="fa-solid fa-bars pt-6 text-2xl pl-8 "></i>
//   </div>
// </div>
// </nav> */}