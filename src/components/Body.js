import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Button from './Button';
import Link from 'next/link';
import Slider from './Slider'
import Dog from "./Dog";
import Location from "./Location";


const Body = async () => {

  return (
    <div className="flex flex-col laptop:flex-row gap-1 my-1 justify-between">
        <div className="flex flex-col gap-1 basis-1/4">
            <div className="bg-slate-950 rounded-md text-white py-5 h-full flex flex-col justify-evenly">
                <div className="flex justify-center flex-nowrap ">
                    <div className="bg-slate-800 rounded-sm py-0.5 px-6 flex gap-4 items-center ">
                        <GoDotFill />
                        <h2 className="text-sm">My Tech Stack</h2>                        
                    </div>
                </div>
                <div className="flex flex-wrap laptop:flex-col text-sm gap-5 mt-5 justify-center laptop:justify-evenly px-8 laptop:px-0 ">
                    <div className="flex justify-center gap-2 laptop:gap-10 items-center">
                        <p>React Js</p>
                        <Image src={"/assets/images/reactjs.svg"} className="" alt="" width={30} height={30} /> 
                    </div>

                    <div className="flex justify-center gap-2 laptop:gap-10 items-center">
                        <p>Tailwind CSS</p>
                        <Image src={"/assets/images/tailwind.png"} className="" alt="" width={30} height={30} /> 
                    </div>

                    <div className="flex justify-center gap-2 laptop:gap-10 items-center">
                        <p>Next Js</p>
                        <Image src={"/assets/images/next-js.svg"} className="bg-white rounded-full p-0.5" alt="" width={30} height={30} /> 
                    </div>

                    <div className="flex justify-center gap-2 laptop:gap-10 items-center">
                        <p>Express Js</p>
                        <Image src={"/assets/images/expressjs.svg"} className="rounded-full p-0.5" alt="" width={30} height={30} /> 
                    </div>

                    <div className="flex justify-center gap-2 laptop:gap-10 items-center">
                        <p>Node Js</p>
                        <Image src={"/assets/images/nodejs.svg"} className="rounded-full p-0.5" alt="" width={40} height={40} /> 
                    </div>

                    <div className="flex justify-center gap-2 laptop:gap-10 items-center">
                        <p>MongoDB</p>
                        <Image src={"/assets/images/mongodb.png"} className="rounded-full p-0.5" alt="" width={30} height={30} /> 
                    </div>
                </div>  
            </div>
        </div>

        <div className="basis-1/2 rounded-md bg-gradient-to-bl from-slate-900 to-rose-600 p-[1px] ">
            <div className="p-4 flex flex-col gap-6 justify-center h-full w-full rounded-md bg-slate-950 ">
                <Link href='/projects' className='flex justify-end' ><Button label='View my Projects' /></Link>
                <Slider />
            </div>
        </div>

        <div className="flex flex-col gap-1 basis-1/4">
            <div className="bg-slate-950 rounded-sm text-white h-10 flex justify-center items-center "><h2>WebApps Design</h2></div>
            <div className="flex flex-row gap-1 justify-between">
                <div className="bg-slate-950 basis-1/2 rounded-sm text-white text-sm h-10 flex justify-center items-center "><h2>User Interaction</h2></div>
                <div className="bg-slate-950 basis-1/2 rounded-sm text-white text-sm h-10 flex justify-center items-center "><h2>User Experience</h2></div>
            </div>

            <Dog />

            <Location />

        </div>
    </div>
  )
}

export default Body