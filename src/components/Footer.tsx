import React from 'react'
import { TbBrandInstagram } from "react-icons/tb";
import { TbBrandTwitter } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";

function Footer({details}) {
  return (
    <footer className="bg-gray-800 flex flex-row items-end justify-between p-6 lg:h-8 w-full text-white gap-4">
      <div className="flex flex-col md:flex-row self-center gap-8">
        <a className="hover:text-yellow-400">{details.terms}</a>
        <a className="hover:text-yellow-400">{details.privacy}</a>
        <a className="hover:text-yellow-400">{details.support}</a>
        <a className="hover:text-yellow-400">{details.copyright}</a>
      </div>

      <div className="flex gap-8 md:gap-10 self-end md:self-center">
        <a
          href="https://discord.com/invite/FdQGeYEZua?fbclid=PAAaYMSF0qquHSBj25vwZ92zSJ1kwxhDLhuhzjGscd5iKPNo8VmecyFZ2_6Rk"
          target="
        -blank"
        >
          <RxDiscordLogo
            size={20}
            className="h-5 w-5 transition-all delay-200 ease-in cursor-pointer hover:text-yellow-400"
          />
        </a>
        <a href="" target="">
          <TbBrandInstagram
            size={20}
            className="h-5 w-5 transition-all delay-200 ease-in cursor-pointer hover:text-yellow-400"
          />
        </a>

        <a href="" target="_blank">
          <TbBrandTwitter
            size={20}
            className="h-5 w-5 transition-all delay-200 ease-in cursor-pointer hover:text-yellow-400"
          />
        </a>

        <a href="" target="_blank">
          <FiFacebook
            size={20}
            className="h-5 w-5 transition-all delay-200 ease-in cursor-pointer hover:text-yellow-400 "
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer
