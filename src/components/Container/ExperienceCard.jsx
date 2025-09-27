import React from 'react'

function ExperienceCard({title,icon, subheader, duration, description}) {
  return (
    <div className="w-3/4 bg-white shadow-md border border-gray-200 p-6 flex flex-col md:flex-row items-center justify-center gap-6">
      <div className="flex-shrink-0">
        <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-700">
          <img src={`${icon}`} />
        </div>
      </div>

      <div className="flex-1 justify-between">
        <div className='flex justify-between'>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <div className="inline-block items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mt-2 md:mt-0 w-fit">{duration}</div>
        </div>
        <p className="text-lg text-blue-600 font-medium">{subheader}</p>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default ExperienceCard