import React from 'react'
import { ProjectCard } from '../components'

function Project() {
  const projectList = [
    {
      title:'Code LLM',
      language:'Python',
      description:"successfully trained an LLM on Google Collab and fine-tuned it using pre-trained weights! This project was a deep dive into the world of generative AI, focusing on how large language models actually work.",
      link:'https://www.linkedin.com/posts/codelikenaveen_machinelearning-llm-artificialintelligence-activity-7436004835210031106-mmcC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaWy7UBWC6j2FjtXcPYrhzItN5J4K5eg_0'
    },
    {
      title:'Desktop Applications',
      language:'Python',
      description:"A simple desktop application with a live clock, a snake game, a temp folder cleaner, a quiz app and a calculator.",
      link:'https://www.linkedin.com/posts/codelikee_python-coding-projectshowcase-activity-7314553263826030593-4iEQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaWy7UBWC6j2FjtXcPYrhzItN5J4K5eg_0'
    },
    {
      title:'Personal Portfolio Website',
      language:'React & JS',
      description:"Built this responsive portfolio website using React, JS and Tailwind CSS. Features include smooth animations and professional design.",
      link:''
    },
    {
      title:'Data Alchimest',
      language:'Python',
      description:"A powerful software solution that transform raw input into perfectly formatted, actionable Excel files.",
      link:''
    }
  ]
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Project