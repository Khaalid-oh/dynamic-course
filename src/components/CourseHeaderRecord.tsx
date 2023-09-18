import React from 'react'

function CourseHeaderRecord({details}) {
  return (
    <div
      id="Home"
      className="bg-gray-200 py-20 px-10 flex flex-col items-center"
    >
      <h1 className="text-2xl text-center text-gray-600 font-bold">
        {details.smallTitle}
        <span className="block text-5xl text-gray-900">{details.bigTitle}</span>
      </h1>
      <p className="max-w-sm text-lg text-gray-800 text-center mt-1">
        {details.description}
      </p>
      <a
        href="#Pricing"
        className="bg-yellow-300 hover:bg-yellow-400  rounded-md mt-8 py-3 px-4 text-gray-800 text-xl font-bold transition-all delay-200 ease-in"
      >
        {details.buttonText}
      </a>
    </div>
  );
}

export default CourseHeaderRecord


Not a beginner per say
