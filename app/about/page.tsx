import ProfileCardCom from "@/components/Main/ProfileCardCom";
import { CircleDot, CornerDownRight, MoveDown } from "lucide-react";
import ContactCardCom from "../../components/Home/ContactCardCom";
import Image from "next/image";
import CertificateImg from "@/public/certificate.jpg";
import BlackBeltImg from "@/public/black-belt.png";
import AboutPic from "@/public/about.png";

export default function aboutPage() {
  return (
    <div className="bg-white rounded-lg w-full h-full p-10 col-span-2">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold pb-5">
          Hi, This Is <span className="text-[#28A745]">Sayem Molla</span>👋
        </h1>
        <div className="text-[#28A745] bg-[#F0F2F5] flex justify-center items-center gap-2 px-5 py-3 w-fit rounded-lg font-bold select-none">
          <div>
            <CircleDot />
          </div>
          <h1>Available For Hire</h1>
        </div>
      </div>
      <div className="">
        <p className="text-lg text-[#576076] bold w-full font-bold py-5">
          As a dedicated MERN Stack Developer with 1+ years of experience, I am
          passionate about crafting dynamic and responsive web applications
          using MongoDB, Express.js, React, and Node.js. I am adept at
          leveraging my expertise in these technologies to deliver high-quality
          solutions that meet user needs and drive business success. My goal is
          to contribute to a forward-thinking organization where I can utilize
          my skills in full-stack development, problem-solving, and agile
          methodologies to create innovative solutions, enhance user
          experiences, and collaborate with cross-functional teams to achieve
          project goals. I am committed to continuous learning and growth in the
          ever-evolving tech landscape, aiming to take on challenging projects
          that push the boundaries of modern web development.
        </p>
        <div className="flex justify-between items-center gap-5">
          <div className="grid grid-cols-3 gap-5 col-span-2">
            <div>
              <div className="text-4xl font-bold">1+</div>
              <h1 className="text-lg font-bold capitalize">
                year of experience
              </h1>
            </div>
            <div>
              <div className="text-4xl font-bold">10+</div>
              <h1 className="text-lg font-bold capitalize">
                Project Completed
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/*  year of experience/Project Completed/Happy Client-------------*/}

      <h1 className="text-4xl text-center font-bold py-7">
        <span className="text-[#28A745]">S</span>kills
      </h1>
      <div className="bg-[#F0F2F5] p-5 shadow-2xl hover:scale-90 transition-all ease-in-out duration-500 rounded-2xl">
        <div className=" bg-white rounded-2xl hover:scale-110 transition-all ease-in-out duration-500 hover:shadow-2xl p-5">
          <div>
            <div className="w-full">
              <ul typeof="disc" className="grid grid-cols-5 gap-5 py-5">
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> React.js
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> Next.js
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> Node.js
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> Express.js
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> MongoDB
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> JavaScript
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> TypeScript
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight />
                  Rest API
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> Mongoose
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> Firebase
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> Zod
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> Jwt
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> Git
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> Github
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> Tailwind CSS
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> BootStrap
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> vite.js
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> Framer motion
                </li>
                <li className="text-xl font-bold flex">
                  <CornerDownRight /> Next Auth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Courses & Achievements-------------------------------------- */}
      <div className="">
        <h1 className="text-4xl text-center font-bold py-7">
          <span className="text-[#28A745]">C</span>ourses
        </h1>
        <div className=" bg-[#F0F2F5] p-5 shadow-2xl hover:scale-90 transition-all ease-in-out duration-500 rounded-2xl">
          <div className="grid grid-cols-4 bg-white rounded-2xl hover:scale-110 transition-all ease-in-out duration-500">
            <div className="text-black text-4xl font-bold flex items-center col-span-2 px-5 rounded-">
              <div className="relative left-5">
                <p>Complete</p>
                <p>Web Development Course</p>
                <p>With</p>
                <p>Jhankar Mahbub</p>
                <p className="text-lg font-light">Programming hero</p>
              </div>
            </div>
            <div className="col-span-2 hover:scale-150 hover:relative hover:right-60 transition-all ease-in-out duration-500 ">
              <Image
                src={CertificateImg}
                alt="Certificate"
                className="rounded-lg"
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
        <h1 className="text-4xl text-center font-bold py-7">
          <span className="text-[#28A745]">A</span>chievements
        </h1>
        <div className=" bg-[#F0F2F5] p-5 shadow-2xl hover:scale-90 transition-all ease-in-out duration-500 rounded-2xl">
          <div className="grid grid-cols-4 bg-white rounded-2xl hover:scale-110 transition-all ease-in-out duration-500">
            <div className="col-span-2 hover:scale-150 hover:relative hover:left-60 transition-all ease-in-out duration-500">
              <Image
                src={BlackBeltImg}
                alt="Certificate"
                className="rounded-lg"
                width={0}
                height={0}
              />
            </div>
            <div className="text-black text-4xl font-bold flex items-center col-span-2 px-5">
              <div className="pl-10">
                <p>Achieve</p>
                <p>Black Belt</p>
                <p>From</p>
                <p>Programming hero</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#F0F2F5] font-bold rounded-2xl shadow-2xl p-5 my-5 hover:scale-75 transition-all ease-in-out duration-500">
          <p className="w-full flex justify-center bg-[#28A745] text-6xl p-10 text-white rounded-2xl ">
            Let&apos;s Talk
            <span className="-rotate-45 text-4xl">
              <CornerDownRight />
            </span>
          </p>
        </div>
      </div>
      {/* Daily dev devCard------------------------------------ */}
      {/* <div className=" bg-[#F0F2F5] shadow-2xl rounded-3xl p-5 hover:scale-90 transition-all ease-in-out duration-500">
        <div className="hover:scale-110 transition-all ease-in-out duration-500">
          <a href="https://app.daily.dev/developersayem012">
            <img
              src="https://api.daily.dev/devcards/v2/CQgVH4yR4I2KmPuQbreXy.png?type=wide&r=crw"
              alt="Sayem Molla's Dev Card"
            />
          </a>
        </div>
      </div> */}
    </div>
  );
}
