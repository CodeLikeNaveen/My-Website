import React from 'react'
import myImage from '../assets/Photo.jpg'
import { Container } from '../components'

function Home() {
    const languages = ['Python', 'C++', 'C', 'HTML', 'CSS', 'JavaScript']
    
    return (
        <div className='w-full py-16'>
            <Container>
                <div className='flex items-center'>
                    
                    <img className='border-2 border-blue-300 mr-10 rounded-3xl shadow-2xl shadow-blue-400'
                     src = {myImage} alt='Photo' width={300}/>

                    <div>
                        <h1 className='text-6xl font-bold text-blue-500'>Hi,</h1>
                        <h4 className='text-6xl font-bold' >My name is Naveen</h4>
                        <p className='text-xl'><br/>
                            I am Computer Science student specializing<br/>
                            in AI & Data Science  with strong programming skills<br/>
                            and a passion for technology, sports excellence, and community service.</p>

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
            </Container>
        </div>
    )
}

export default Home