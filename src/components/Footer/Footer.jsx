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
        <div className="fixed bottom-0 w-full h-14 flex p-2 bg-blue-500 justify-between items-center">
          <div className='ml-40 flex space-x-12'>
                    {contactLink.map((data) => (
                        <a href={data.link}>    <i className={`${data.icon} 
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
          <p className="text-white text-center mr-20">
              &copy; Copyright 2023. All Rights Reserved by Naveen.
          </p>
        </div>
    </section>
  )
}

export default Footer