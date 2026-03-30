import React from 'react'
import myImage from '../assets/Photo.jpg'

function Home() {
    const languages = ['Python', 'Java', 'SQL', 'C++']
    
    return (
        <div className='m-[2rem] md:flex md:grid-cols-2 gap-12 justify-center '>
            
            <div key={'image'} className='flex justify-center'>
                <img className='border-2 border-blue-300 md:mr-10 rounded-3xl shadow-2xl shadow-blue-400 md:w-[20rem] w-[80vw]' src = {myImage} alt='Photo'/>
            </div>

            <div key={'content'} className='text-center'>
                <h1 className='
                    text-[clamp(1.8rem,calc(7vw+1rem),5rem)] 
                    font-bold
                    max-md:m-0
                    mt-8 
                    bg-gradient-to-l hover:bg-gradient-to-r text-center from-blue-500 to-black 
                    bg-clip-text text-transparent'>Naveen Reddu</h1>
                <div className='flex justify-center'>
                    <p className='text-xl text-left text-gray-500 md:text-2xl w-[40rem] my-10'>
                        I am pursuing my Bachelor’s degree at GJUS&T, Hisar, with a strong interest in data analysis, software development, and machine learning. I enjoy solving real-world problems using data and building practical, efficient solutions.
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