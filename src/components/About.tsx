import React from 'react'
import Image from "next/image";

function About({details}) {
  return (
    <div
      id="About"
      className="flex flex-col max-w-8xl mx-auto py-16 px-8 items-center justify-center gap-4"
    >
      <div className="">
        <h2 className="text-3xl font-extrabold text-center md:text-4xl">
          {details.bigTitle}
        </h2>
      </div>
      <div className="">
        <Image
          width={details.tutor.width}
          height={details.tutor.height}
          src={details.tutor.url}
          alt={details.smallTitle + details.bigTitle}
          className="rounded-md w-80 border-2 border-yellow-400 hover:border-purple-600 hover:w-[330px] transition-all delay-200 ease-in"
        />
      </div>
      <div className="md:w-[60%] lg:w-[55%] items-center">
        <p className="text-center font-bold"> {details.description}</p>
      </div>
      <a
        href="https://discord.com/invite/FdQGeYEZua?fbclid=PAAaYMSF0qquHSBj25vwZ92zSJ1kwxhDLhuhzjGscd5iKPNo8VmecyFZ2_6Rk" target='
        -blank'
        className="bg-yellow-300 hover:bg-yellow-400  rounded-md mt-3 py-3 px-4 text-gray-800 text-xl font-bold transition-all delay-200 ease-in"
      >
        {details.buttonText}
      </a>
    </div>
  );
}

export default About
