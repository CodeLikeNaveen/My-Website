import React from 'react'

function Footer() {
  const contactLink =[
        {
            name:'G-mail',
            icon:'bx bxl-gmail',
            link:'https://mail.google.com/mail/?view=cm&fs=1&to=code.contact.naveen@gmail.com'
        },
        {
            name:'LinkedIn',
            icon:'bx bxl-linkedin',
            link:'https://www.linkedin.com/in/codelikee/'
        },
        {
            name:'Instagram',
            icon:'bx bxl-instagram',
            link:'https://www.instagram.com/naveen.coder/'
        }
    ]
  return (
    <section>
        <div className="md:fixed md:bottom-0 flex flex-row max-md:flex-col w-full p-2 bg-blue-500 justify-start max-md:justify-center max-md:items-center">
            <div className='flex justify-end items-center'>
                {contactLink.map((data) => (
                    <a href={data.link} className='h-[100%] px-[1rem]'
                        ><i className={`${data.icon} 
                        inline-flex
                        h-10
                        w-10
                        bg-gradient-to-r from-blue-900 to-blue-500
                        rounded-full
                        text-center
                        items-center
                        justify-center
                        transition-all
                        text-xl
                        hover:text-2xl
                        hover:transition-text-2xl duration-300 ease-linear
                        hover:text-white  
                        hover:border-white
                        hover:bg-gradient-to-l
                    `}></i></a>  
                ))}
            </div>
<<<<<<< HEAD
            <div className="h-[100%] text-white text-[clamp(1rem,calc(1vw+1rem),1.8rem)] md:ml-auto md:mr-8">
=======
            <div className="h-[100%] text-white text-[1.5rem] md:ml-auto md:mr-8">
>>>>>>> f196cdfe28763fdf42a05350dfd5bed5d3f28deb
                &copy; Copyright 2023. All Rights Reserved by Naveen.
            </div>
        </div>
    </section>
  )
}

export default Footer