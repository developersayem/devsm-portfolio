"use client";

import {
  MoonStar,
  SunMoon,
  Home,
  User,
  Layers3,
  FolderGit2,
  Rss,
  Send,
  CornerDownRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBarCom() {
  const [dark, setDark] = useState(false);
  return (
    <div className="bg-white py-3 rounded-lg flex justify-evenly items-center shadow-lg">
      <div className="text-2xl font-bold">Developer Sayem</div>
      <div className="flex justify-center items-center gap-2">
        <Link
          href="/"
          className="btn bg-transparent hover:bg-transparent border-none shadow-none hover:text-[#28A745] transition-colors ease-in-out duration-500 text-lg"
        >
          <span>
            <Home />
          </span>
          Home
        </Link>
        <Link
          href="/about"
          className="btn bg-transparent hover:bg-transparent border-none shadow-none hover:text-[#28A745] transition-colors ease-in-out duration-500 text-lg"
        >
          <span>
            <User />
          </span>
          About
        </Link>
        <Link
          href="/services"
          className="btn bg-transparent hover:bg-transparent border-none shadow-none hover:text-[#28A745] transition-colors ease-in-out duration-500 text-lg"
        >
          <span>
            <Layers3 />
          </span>
          Services
        </Link>
        <Link
          href="/projects"
          className="btn bg-transparent hover:bg-transparent border-none shadow-none hover:text-[#28A745] transition-colors ease-in-out duration-500 text-lg"
        >
          <span>
            <FolderGit2 />
          </span>
          Projects
        </Link>
        {/* <Link
          href="/blogs"
            className="btn bg-transparent hover:bg-transparent border-none shadow-none hover:text-[#28A745] transition-colors ease-in-out duration-500 text-lg"
        >
          <span>
            <Rss />
          </span>
          Blogs
        </Link> */}
        <Link
          href="/contact"
          className="btn bg-transparent hover:bg-transparent border-none shadow-none hover:text-[#28A745] transition-colors ease-in-out duration-500 text-lg"
        >
          <span>
            <Send />
          </span>
          Contact
        </Link>
      </div>
      <div className="flex justify-center items-center gap-5">
        <button
          onClick={() => setDark(!dark)}
          className=" btn bg-transparent hover:bg-transparent border-none shadow-none hover:text-[#28A745] text-4xl"
        >
          {dark ? (
            <span className="font-bold">
              <MoonStar />
            </span>
          ) : (
            <span className="font-bold">
              <SunMoon />
            </span>
          )}
        </button>
        <button className=" btn bg-[#28A745] text-white hover:bg-[#28A745] hover:text-white font-bold">
          Let&apos;s Talk
          <span className="-rotate-45">
            <CornerDownRight />
          </span>
        </button>
      </div>
    </div>
  );
}
