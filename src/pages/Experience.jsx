import React from 'react'
import { ExperienceCard } from '../components'
import gju from '../assets/gju.jpg'
import erpl from '../assets/ERPL.jpg'
import school from '../assets/School.jpg'


function Experience() {

  const expData = [
    {
      title:'Data Science Intern',
      icon:erpl,
      subheader:'EXPRESS ROADWAYS PVT. LTD.',
      duration:'June 2025 - July 2025',
      description:'Built a custom software tool that takes CSV files as input and generates well-formatted Excel reports with automated styling and insights. Successfully implemented real-time data dashboards in Looker Studio (Google Data Studio) for the first time in the company.'
    },
    {
      title:'Computer Science Student',
      icon:gju,
      subheader:'Guru Jambheshwar University of Science & Technology, Hisar',
      duration:'2023-2026',
      description:'Currently pursuing B.Sc. (Hons.) in Computer Science with specialization in AI & Data Science. Maintaining CGPA of 8.44 while developing practical programming skills.'
    },
    {
      title:'Higher Secondary Education',
      icon:school,
      subheader:'Ridh Nath Sr. Sec. School, Balak (Hisar)',
      duration:'2021-2022',
      description:'Successfully completed 12th grade with a focus on Physics, Chemistry, and Mathematics, achieving an aggregate score of 78.8%'
    }
  ]

  return (
    <div className="w-screen items-center justify-center p-6">
      <div className='flex items-center space-y-10 justify-center flex-col'>{
        expData.map((data,index)=>(
          <ExperienceCard key={index} {...data}/>
        ))}
      </div>
    </div>
  )
}

export default Experience