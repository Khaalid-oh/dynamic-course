import React, { useRef, useEffect, useState } from "react";
import { signIn } from "next-auth/client";
import { FcGoogle } from "react-icons/fc";
import { FiEyeOff, FiEye } from "react-icons/fi";
import emailValidator from "email-validator";


function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const handleEmailKeyPress = (event) => {
    if (event.key === "Enter" && passwordRef.current) {
      passwordRef.current.focus();
    }
  };

    const handlePasswordChange = (event) => {
      const password = event.target.value;

      if (password.length < 8) {
        setPasswordError("Password should be at least 8 characters long.");
      } else if (!/[A-Z]/.test(password)) {
        setPasswordError(
          "Password should contain at least one uppercase letter."
        );
      } else if (!/[0-9]/.test(password)) {
        setPasswordError("Password should contain at least one number.");
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        setPasswordError(
          "Password should contain at least one special character."
        );
      } else {
        setPasswordError("");
      }
    };

      const handleEmailChange = (event) => {
        const email = event.target.value;
        if (!emailValidator.validate(email)) {
          setEmailError("Please enter a valid email.");
        } else {
          setEmailError("");
        }
      };


  return (
    <form>
      <section className="flex flex-col mx-auto max-w-sm p-2 items-start justify-center gap-5 text-sm text-slate-500 py-48">
        <h1 className="text-4xl text-gray-600">Welcome back 👋</h1>
        <p>Welcome back! Please enter your details.</p>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="pl-1">
            Email
          </label>
          <input
            type="text"
            id="email"
            ref={emailRef}
            placeholder="Enter your mail"
            className={`h-10 p-2 rounded-lg bg-transparent border-[1px] outline-none focus:outline-none ${
              emailError ? "border-red-500" : "border-gray-400"
            }`}
            onChange={handleEmailChange}
            onKeyPress={handleEmailKeyPress}
          />
          {emailError && (
            <p className="text-red-500 mt-1 text-xs">{emailError}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password" className="pl-1">
            Password
          </label>
          <div className="relative ">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              ref={passwordRef}
              placeholder="********"
              className={`h-10 p-2 w-full rounded-lg bg-transparent border-[1px] outline-none focus:outline-none ${
                passwordError ? "border-red-500" : "border-gray-400"
              }`}
              onChange={handlePasswordChange}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
          {passwordError && (
            <p className="text-red-500 mt-1 text-xs">{passwordError}</p>
          )}
        </div>
        <div className="flex w-full justify-between">
          <div className="flex gap-[2px]">
            <input type="checkbox" id="days"></input>
            <label htmlFor="days">Remember for 30 days</label>
          </div>
          <a className="text-[#eec213]">Forgot password?</a>
        </div>
        <button
          type="submit"
          className="py-2 bg-yellow-400 hover:bg-[#eec213] rounded-md w-full text-white"
        >
          Sign in
        </button>
        <button
          type="submit"
          className="py-2 px-2 border-2 rounded-md flex items-center justify-center gap-1 w-full hover:text-yellow-400"
        >
          <FcGoogle />
          Sign in with Google
        </button>
        <div className="flex gap-1 items-center self-center">
          <p>Don&rsquo;t have an account?</p>
          <a href="/signup" className="text-[#eec213]">
            Sign up
          </a>
        </div>
      </section>
    </form>
  );
}

export default Login;
