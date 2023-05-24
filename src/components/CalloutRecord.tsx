import React from 'react'
import Image from 'next/image'

function CalloutRecord({details}) {
  return (
    <div id='Forbez' className="bg-gray-800 py-16 px-10">
      <div className="flex flex-col max-w-5xl md:flex-row md:items-center mx-auto lg:gap-4">
        <div className="md:w-[60%] grow p-4">
          <h2 className="text-4xl text-gray-200 font-bold">
            {details.smallTitle}
            <span className="block text-yellow-200 text-6xl font-bold mb-2">
              {details.bigTitle}
            </span>
          </h2>
          <p className="text-gray-200 text-xl max-w-lg">
            {details.description}
          </p>
        </div>
        <div className="w-full p-4 lg:w-1/3">
          <Image
            width={details.image.width}
            height={details.image.height}
            src={details.image.url}
            alt={details.smallTitle + details.bigTitle}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default CalloutRecord
