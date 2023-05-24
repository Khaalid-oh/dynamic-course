import React, { useState, useEffect } from "react";

function Navbar({ details }) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setMobile(isMobile);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-gray-800 flex items-end justify-between p-6 h-8 w-full md:pr-12 pl-0">
      <a
        href="#Forbez"
        className="flex items-center justify-center self-center hover:-translate-x-4 transition-all delay-50 ease-in"
      >
        <span className="bg-yellow-400 h-[2px] w-6 md:w-10"></span>
        <div className="text-black py-1 px-3 bg-yellow-400 rounded-sm">
          {details.logoText}
        </div>
      </a>
      <div className="text-purple-100 flex self-center justify-self-center gap-12">
        {!mobile && (
          <div className="flex gap-12">
            <a
              href="#Home"
              className="hover:text-yellow-400 p-2 transition-all delay-50 ease-in"
            >
              {details.home}
            </a>
            <a
              href="#About"
              className="hover:text-yellow-400 p-2 transition-all delay-50 ease-in"
            >
              {details.about}
            </a>
          </div>
        )}
        <a
          href="#"
          className="hover:text-yellow-400 p-2 transition-all delay-50 ease-in"
        >
          {details.login}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
