import React from 'react'
import myImage from '../assets/Photo.jpg'

function Home() {
    const languages = ['Python', 'C++', 'C', 'HTML', 'CSS', 'JavaScript']
    
    return (
        <div className='w-auto h-auto m-[2rem] flex grid-cols-2 gap-12 max-md:inline-block justify-center '>
            
            <div key={'image'} className='flex justify-center'>
                <img className='border-2 border-blue-300 mr-10 rounded-3xl shadow-2xl shadow-blue-400 w-[20rem]' src = {myImage} alt='Photo'/>
            </div>

            <div key={'content'} className='inline-block justify-center'>
                <h1 className='text-6xl font-bold mt-8 bg-gradient-to-l hover:bg-gradient-to-r text-center from-blue-500 to-black bg-clip-text text-transparent'>Naveen Reddu</h1>
                <div className='flex justify-center'>
                    <p className='text-xl text-gray-500 md:text-2xl w-96 my-10'>
                        Computer Science student specializing in AI & Data Science  with strong programming skills
                        and a passion for technology and sports excellence.
                    </p>
                </div>

                <div className='flex flex-wrap justify-center gap-3 mb-8'>
                    {languages.map((item) => (
                        <p className='
                            inline-flex px-6 py-2 
                            rounded-full
                            item-center 
                            shadow-2xl
                            bg-gradient-to-r from-blue-500 to-blue-900
                            hover:bg-gradient-to-l
                            transform 
                            transition-transform 
                            duration-200
                            hover:-translate-y-1
                            text-white                            
                            text-xl'
                            >{item}
                        </p>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home