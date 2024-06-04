"use client"
import Image from "next/image";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { GrDocumentPdf } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { useEffect, useState } from "react";
import Button from './Button';
import Link from 'next/link';

const Body = () => {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [isp, setIsp] = useState('')
    const [timezone, setTimezone] = useState('')

    const [dogUrl, setDogUrl] = useState('')

    const FetchApi = async()=>{
        await fetch('http://ip-api.com/json')
            .then((Response)=>{
                 return Response.json()
            })
            .then((data)=>{
                 setCountry(data.country)
                 setCity(data.city)
                 setIsp(data.isp)
                 setTimezone(data.timezone)
             })
             .catch((err)=>{
                 console.log(err.message, 'An Error Occured')
             })
    }

    const FetchDogs = () =>{
        fetch('https://dog.ceo/api/breeds/image/random')
           .then((Response)=>{
                return Response.json()
            })
           .then((data)=>{
                setDogUrl(data.message)
            })
           .catch((err)=>{
                console.log(err.message, 'An Error Occured')
            })
    }

    useEffect(()=>{
        FetchApi();
        setInterval(() => {
            FetchDogs();    
        }, 10000);    
    },[])

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
            <div className="p-4 flex items-center justify-center h-full w-full rounded-md bg-slate-950 ">
                <Link href='/projects' className='' ><Button label='View my Projects' /></Link>
            </div>
        </div>

        <div className="flex flex-col gap-1 basis-1/4">
            <div className="bg-slate-950 rounded-sm text-white h-10 flex justify-center items-center "><h2>WebApps Design</h2></div>
            <div className="flex flex-row gap-1 justify-between">
                <div className="bg-slate-950 basis-1/2 rounded-sm text-white text-sm h-10 flex justify-center items-center "><h2>User Interaction</h2></div>
                <div className="bg-slate-950 basis-1/2 rounded-sm text-white text-sm h-10 flex justify-center items-center "><h2>User Experience</h2></div>
            </div>

            <div className="bg-slate-950 rounded-md text-white flex flex-col gap-2 p-2 h-1/2">
                <div className="flex flex-row justify-center laptop:justify-between items-center px-2">
                    <div className="flex flex-col items-center laptop:items-start mb-5 laptop:mb-0">
                        <h2>Dog Api</h2>
                        <p className="text-sm text-blue-500">Dog lover like me?</p>                        
                    </div>
                    <BsArrowUpRightCircleFill size={20} color="blue" className="hidden laptop:block" />
                </div>

                <div className="bg-slate-800 mx-auto flex justify-center items-center rounded-full ">
                    <img  alt="dog image" className="" src={dogUrl} width={100} height={100} />
                </div>   
            </div>

            <div className="bg-slate-950 rounded-md text-white flex flex-col gap-2 p-2 h-1/2">
                <div className="flex flex-row justify-center laptop:justify-between items-center px-2">
                    <div className="flex flex-col items-center laptop:items-start">
                        <h2>Your Location</h2>
                        <p className="text-sm text-blue-500">Auto Detect location</p>                        
                    </div>
                    <BsArrowUpRightCircleFill size={20} color="blue" className="hidden laptop:block"/>
                </div>

                <div className="mx-auto flex flex-col justify-center items-center ">
                    <div className="flex items-center py-3 gap-2">
                        <div className="flex gap-6">
                            <p className="text-slate-400 text-xs">City</p>
                            <h1 className="text-lg text-slate-100">{city}</h1>    
                        </div>
                        
                        <div className="bg-blue-500 rounded-lg w-0.5 h-8" />

                        <div className="flex gap-6">
                            <h1 className="text-lg text-slate-100 text-nowrap">{country}</h1>
                            <p className="text-slate-400 text-xs">Country</p> 
                        </div>  
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <p className="text-xs text-slate-500">Your Timezone:</p>
                        <p className="text-slate-100 text-md">{timezone}</p>  
                    </div>
                    
                    <div className="flex flex-col justify-center mt-4 items-center">
                        <p className="text-xs text-slate-500">Your Network Provider:</p>
                        <p className="text-slate-100 text-md">{isp}</p>  
                    </div>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Body