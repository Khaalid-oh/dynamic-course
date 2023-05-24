import React from 'react'
import { BsDiscord } from "react-icons/bs";

function LearnSectionRecord({details}) {
  return (
    <div className="max-w-8xl mx-auto py-20 px-8">
      <h2 className="text-4xl font-bold mb-8">{details.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {details.learningPoint.map((point) => (
          <div
            className="flex flex-col text-gray-600 bg-gray-50 rounded-lg"
            key={point.id}
          >
            <div className="py-3 px-3 flex items-center justify-between border-2 border-gray-500 rounded-t-lg text-gray-700 font-bold">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"> </div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"> </div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-grow flex items-center justify-center py-6 px-8 rounded-b-lg border-2 border-gray-500 border-t-0 text-center">
              {point.title}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <h3 className="text-8xl font-bold">{details.numberOfLessons}</h3>
            <span className="text-3xl font-bold text-purple-600">+</span>
          </div>
          <div>{details.numberOfLessonsText}</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className='flex items-center justify-center'>
            <h3 className="text-8xl font-bold">{details.hoursOfContent}</h3>
            <span className="text-3xl font-bold text-purple-600">+</span>
          </div>
          <div>{details.hoursOfContentText}</div>
        </div>
          <div className='flex flex-col items-center '>
            <a href="https://discord.com/invite/FdQGeYEZua?fbclid=PAAaYMSF0qquHSBj25vwZ92zSJ1kwxhDLhuhzjGscd5iKPNo8VmecyFZ2_6Rk" target='
        -blank' className='mb-6 lg: translate-y-3'>
              <BsDiscord size={70} className='text-purple-600 flex'/>
            </a>
            <span className=''>Support on Discord</span>
          </div>
      </div>
    </div>
  );
}

export default LearnSectionRecord
   