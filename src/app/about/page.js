import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Aboutpage = () => {
  return (
    <div className="container h-full laptop:h-screen overflow-hidden flex flex-col laptop:flex-row mx-auto justify-evenly ">
      <div className="flex flex-col gap-2 items-center justify-center mb-10 laptop:mb-0">
        <h1 className="text-white text-3xl laptop:mb-0 ">Passionate</h1>
        <h2 className="text-2xl text-blue-500">Full Stack Developer</h2>
        <p className="text-white text-sm laptop:text-md w-full px-5 laptop:w-96 text-center laptop:text-justify">I am a passionate junior fullstack engineer with a love for crafting innovative digital solutions. My tech stack is React Js for the frontend, Node Js and Express Js for the backend and MongoDB for the database. I soon fell in love with Next Js which makes fullstack development seamless and unmatchingly easy.
          I thrive on tackling complex challenges and finding creative solutions. Whether it is coding a sleek user interface or optimizing database performance, I am always up for the challenge.
          In the ever-evolving world of technology, there is always something new to learn. I am committed to staying ahead of the curve, exploring emerging trends, and mastering new tools and techniques.
        </p>
        <div className="flex"><Link href="https://wa.link/l8cd8e" className="bg-blue-500 hover:bg-blue-400 text-white rounded-sm py-2 px-4">Hire me</Link></div>
      </div>
      <ul className="mt-2 rounded-sm text-white text-xl laptop:text-6xl border border-1 border-yellow-200 p-2 uppercase justify-center flex laptop:flex-col gap-4 font-semibold">
        <div className="flex laptop:flex-col gap-2 items-center bg-yellow-200 px-4 py-2 laptop:py-6 rounded-sm text-slate-950">
          <li>a</li>
          <li>b</li>
          <li>o</li>
          <li>u</li>
          <li>t</li>
        </div>

        <div className="flex laptop:flex-col gap-2 items-center text-yellow-200">
          <li>m</li>
          <li>e</li>
        </div>
      </ul>
      <div className="flex flex-col gap-6 items-center justify-center p-12">
        <Image alt="profile" src={"/assets/images/profile.jpg"} width={150} height={150} className="rounded-full " />
        <h1 className="text-white text-3xl laptop:text-4xl font-semibold text-center">Praise<br/>Akintayo</h1>
        <div className="flex gap-8 text-3xl text-white">
          <Link className='hover:text-slate-300' target="_blank" href="https://www.linkedin.com/in/praise-akintayo-8a822b196"><FaLinkedin /></Link>
          <Link className='hover:text-slate-300' target="_blank" href="https://wa.link/l8cd8e"><FaSquareWhatsapp /></Link>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage