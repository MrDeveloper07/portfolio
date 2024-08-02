import React from 'react'


function Navbar() {


  return (

    <div className='bg-white dark:bg-gray-900'>
        <div className="flex  dark:bg-gray-900  md:justify-center  bg-white h-20">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a href='#home'>Home</a></li>
      <li>
        <a href='#skills'>Skills</a>
      </li>
      <li><a href='#project'>Projects</a></li>
      <li><a href='#contact'>Contact us</a></li>
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-black text-xl">daisyUI</a> */}
  </div>
  <div className="justify-center flex md:ml-80 hidden lg:flex">
    <ul className="menu menu-horizontal px-1  mt-4 text-lg mr-80 gap-8 font-semibold text-gray-900 dark:text-white">
      <li><a href='#home'>Home</a></li>
      <li>
      
        <a href='#skills'>Skills</a>
        
      </li>
      <li><a href='#project'>Projects</a></li>
      <li><a href='#contact'>Contact us</a></li>
    </ul>
  </div>

  
</div>
      
    </div>
    
  )
}

export default Navbar