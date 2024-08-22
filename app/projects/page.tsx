import Image from "next/image";
import Link from "next/link";
import GraphicalStorePic from "@/public/graphical-store-thumbnail.png";
import TypingMonsterPic from "@/public/type-monster-thumbnail.png";
import { Github, Globe } from "lucide-react";

export default function servicesPage() {
  return (
    <div className="bg-white rounded-lg w-full h-full p-10 ">
      <div className="p-5">
        <h1 className="text-3xl pb-5 font-bold">
          Check Out My Latest Projects
        </h1>
        <p className="p-1 font-bold text-[#6B7386]">
          Explore my latest projects, where I bring ideas to life through
          innovative web solutions. As a MERN stack developer, I’ve worked on a
          variety of projects that showcase my expertise in full-stack
          development, from dynamic web applications to custom dashboards and
          beyond. Each project is a testament to my commitment to building
          scalable, secure, and user-friendly applications.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5">
        <div className="p-5 shadow-2xl rounded-xl">
          <div className="grid grid-cols-2">
            <div className=" justify-between items-center p-5">
              <h1 className="text-4xl font-bold py-2">Graphical Store</h1>
              <h2 className="text-xl font-bold text-[#6B7386]">
                Full stack Project
              </h2>
              <p className="text-[#6B7386]">
                The website "Graphical Store" appears to require JavaScript to
                function properly. It likely showcases products or services,
                possibly related to graphic design or digital products, but I
                couldn't access further details from the preview.
              </p>
              <p className="text-[#6B7386]">
                <span className="font-bold">Technology used:</span> JavaScript,
                React.js, Express.js, firebase, Tailwind CSS
              </p>
              <div className="flex justify-start items-center gap-4 py-5">
                <Link
                  href="https://github.com/developersayem/graphical-store-front-end"
                  className="text-[#28a746] w-fit underline text-lg flex justify-start items-center border-2 rounded-xl hover:border-[#28a746] hover:text-black transition-color duration-500 ease-in-out"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="p-3">
                    <Github />
                  </span>
                </Link>
                <Link
                  href="https://graphical-store.vercel.app/"
                  className="text-[#28a746] w-fit underline text-lg flex justify-start items-center border-2 rounded-xl hover:border-[#28a746] hover:text-black transition-color duration-500 ease-in-out"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="p-3">
                    <Globe />
                  </span>
                </Link>
              </div>
            </div>
            <div className="rounded-lg w-full h-full">
              <Image
                className="rounded-lg"
                src={GraphicalStorePic}
                alt="Profile Picture"
                width={0}
                height={0}
                layout="responsive"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="p-5 shadow-2xl rounded-xl mt-5">
          <div className="grid grid-cols-2">
            <div className=" justify-between items-center p-5">
              <h1 className="text-4xl font-bold py-2">Type Monster</h1>
              <h2 className="text-xl font-bold text-[#6B7386]">
                Front-End Project
              </h2>
              <p className="text-[#6B7386]">
                The "Type Monster" website is an engaging typing game that
                challenges users to improve their typing speed and accuracy. The
                interface is simple and user-friendly, featuring a timer and a
                progress bar to track performance. Users can start the game
                instantly and work on enhancing their typing skills while
                enjoying a fun and interactive experience.
              </p>
              <p className="text-[#6B7386]">
                <span className="font-bold">Technology used:</span> JavaScript,
                React.js, Tailwind CSS
              </p>
              <div className="flex justify-start items-center gap-4 py-5">
                <Link
                  href="https://github.com/developersayem/type-monster"
                  className="text-[#28a746] w-fit underline text-lg flex justify-start items-center border-2 rounded-xl hover:border-[#28a746] hover:text-black transition-color duration-500 ease-in-out"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="p-3">
                    <Github />
                  </span>
                </Link>
                <Link
                  href="https://developersayem.github.io/type-monster/"
                  className="text-[#28a746] w-fit underline text-lg flex justify-start items-center border-2 rounded-xl hover:border-[#28a746] hover:text-black transition-color duration-500 ease-in-out"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="p-3">
                    <Globe />
                  </span>
                </Link>
              </div>
            </div>
            <div className="rounded-lg w-full h-full">
              <Image
                className="rounded-lg"
                src={TypingMonsterPic}
                alt="Profile Picture"
                width={0}
                height={0}
                layout="responsive"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        {/* card 3 */}

        <div className="p-5 shadow-2xl rounded-xl">
          <div className="grid grid-cols-2">
            <div className=" justify-between items-center p-5">
              <h1 className="text-4xl font-bold py-2">Graphical Store</h1>
              <h2 className="text-xl font-bold text-[#6B7386]">
                Full stack Project
              </h2>
              <p className="text-[#6B7386]">
                The website "Graphical Store" appears to require JavaScript to
                function properly. It likely showcases products or services,
                possibly related to graphic design or digital products, but I
                couldn't access further details from the preview.
              </p>
              <p className="text-[#6B7386]">
                <span className="font-bold">Technology used:</span>JavaScript,
                React.js, Express.js, firebase, Tailwind CSS
              </p>
              <div className="flex justify-start items-center gap-4 py-5">
                <Link
                  href="https://github.com/developersayem/graphical-store-front-end"
                  className="text-[#28a746] w-fit underline text-lg flex justify-start items-center border-2 rounded-xl hover:border-[#28a746] hover:text-black transition-color duration-500 ease-in-out"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="p-3">
                    <Github />
                  </span>
                </Link>
                <Link
                  href="https://graphical-store.vercel.app/"
                  className="text-[#28a746] w-fit underline text-lg flex justify-start items-center border-2 rounded-xl hover:border-[#28a746] hover:text-black transition-color duration-500 ease-in-out"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="p-3">
                    <Globe />
                  </span>
                </Link>
              </div>
            </div>
            <div className="rounded-lg w-full h-full">
              <Image
                className="rounded-lg"
                src={GraphicalStorePic}
                alt="Profile Picture"
                width={0}
                height={0}
                layout="responsive"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
