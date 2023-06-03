import React from "react";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  return (
    <form>
      <section className="flex flex-col mx-auto max-w-sm p-2 items-start justify-center gap-5 text-sm text-slate-500 py-48">
        <h1 className="text-4xl text-gray-600">Welcome 👋</h1>
        <p>Create an account, it's free!</p>
        {/* <div className="flex flex-col w-full">
          <label htmlFor="name" className="pl-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="h-10 p-2 rounded-lg bg-transparent border-[1px] border-gray-400"
          />
        </div> */}
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="pl-1">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your mail"
            className="h-10 p-2 rounded-lg bg-transparent border-[1px] border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password" className="pl-1">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="********"
            className="h-10 p-2 rounded-lg bg-transparent border-[1px] border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password" className="pl-1">
            Confirm password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="********"
            className="h-10 p-2 rounded-lg bg-transparent border-[1px] border-gray-400"
          />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex gap-[2px]">
            <input type="checkbox" id="days"></input>
            <label htmlFor="days">Remember me</label>
          </div>
          <a className="text-[#eec213]">Forgot password?</a>
        </div>
        <button
          type="submit"
          className="py-2 bg-yellow-400 hover:bg-[#eec213] rounded-md w-full text-white"
        >
          Sign up
        </button>
        <button
          type="submit"
          className="py-2 px-2 border-2 rounded-md flex items-center justify-center gap-1 w-full hover:text-yellow-400"
        >
          <FcGoogle />
          Sign up with Google
        </button>
        <div className="flex gap-1 items-center self-center">
          <p>Have an account? </p>
          <a 
          href="/login"
          className="text-[#eec213]">Log In</a>
        </div>
      </section>
    </form>
  );
}

export default Signup;
