import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()
    const [isChecked, setIsChecked] = useState(false);
    
    const handleCheckboxChange = (event)=>{
      setIsChecked(event.target.checked);
    };

    const navItems = [
    {
      name: 'About',
      slug: "/",
    },
    {
      name: 'Learning',
      slug: "/experience",
    },
    {
      name: 'Project',
      slug: "/project",
    }  
  ]
  return (
    <header className='box-border w-[100%] top-0 z-50'>
      <nav className='md:px-4 px-2 bg-white shadow-[3px_3px_5px_rgba(0,0,0,0.1)] max-w-6xlS'>
        <label>          
          {/* Slide Portion */}
          <div className={`absolute top-0 right-0 z-50 h-[100dvh] w-60 max-sm:w-[100%] ${isChecked ? '' : ' hidden'} `} >
            <ul className='
              h-[100%] w-[100%]
              z-10 bg-[rgba(255,255,255,0.1)] backdrop-blur-md
              shadow-[-10px_0_10px_rgba(0,0,0,0.1)]
              flex flex-col 
              items-start justify-start'>
                <li className='py-[1.5rem] px-[1rem] border-t-2 border-white block'></li>
                  {navItems.map((item) =>(
                    <li key={item.name}
                        className='w-[100%] text-blue-500 font-semibold py-[0.5rem] px-[1rem] border-t-2 border-white block capitalize transform ease-out duration-200 hover:text-gray-700'
                      ><button onClick={() => navigate(item.slug)} className='w-[100%] text-left'> {item.name} </button>
                    </li>))}
              <li className='w-[100%]'>
                <a href="/Naveen_Resume.pdf"
                  download 
                  className="
                    w-[100%]
                    flex  
                    space-x-2 
                    hover:text-gray-700
                    hover:border-gray-500
                    text-blue-500 font-semibold py-[0.5rem] px-[1rem] border-t-2 border-white capitalize transform ease-out duration-200
                    " >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </label>
        <ul className='w-[100%] flex justify-end items-center'>
          <li className='bg-gradient-to-l hover:bg-gradient-to-r from-blue-500 to-blue-900 font-bold text-[2rem] mr-auto bg-clip-text text-transparent'>
            <Link to='/'>{`</>`}CodeLikee</Link>
          </li>
            {navItems.map((item) => (
                <li key={item.name}
                    className='h-[50px]'>
                    <button
                    onClick={() => navigate(item.slug)}
                    className='
                      max-md:hidden
                      h-[100%]
                      px-8
                      flex
                      items-center
                      hover:bg-gray-100
                    '>{item.name}</button>
                </li>
                )
            )}
            <li>
              <a href="/Naveen_Resume.pdf" download 
                className="
                      flex px-3 py-1 bg-white text-blue-600
                      space-x-2 
                      rounded-lg 
                      max-md:hidden
                      border-2
                      hover:shadow-black
                      hover:border-gray-500
                      text-xl" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                Resume
              </a>
            </li>
            <li className='mx-6 h-[3rem] w-[3rem] z-50  rounded-md cursor-pointer   hover:shadow-black shadow-2xl '>
              <label>
                <input type='checkbox' onChange={handleCheckboxChange} checked={isChecked} className='hidden'/>
                <i className={`
                  ${isChecked ? 'bx bxr bx-x':'bx bxr bx-menu'}
                  absolute text-5xl text-blue-600`} >         
                  </i>
                </label>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header