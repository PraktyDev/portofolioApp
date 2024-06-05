'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoDotFill } from 'react-icons/go';
import { RiMessage3Fill } from "react-icons/ri";
import { GrDocumentPdf } from "react-icons/gr";
import { GoCopy } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import Button from './Button';

const Hero = () => {
    const [text, setText] = useState("Copy Email")
    const [icon, setIcon] = useState(<GoCopy />)

    const handleCopy = async () =>{
        const email = 'akintayopraise34@gmail.com'
        await navigator.clipboard.writeText(email)
        setText("Copied")
        setIcon(<TiTick />)
        setTimeout(()=> {
            setText("Copy Email");
            setIcon(<GoCopy />)
        }, 3000)
    }

  return (
    <div className='flex flex-row justify-center tablet:justify-between items-center p-8 bg-slate-950 rounded-md my-1'> 
        <div className='flex flex-col text-white'>
            <p className='text-xs uppercase mb-1 font-semibold text-blue-500 text-center tablet:text-left'>Fullstack Developer</p> 
            <h3 className='text-lg tablet:text-xl laptop:text-2xl desktop:text-3xl  py-3 font-semibold text-center tablet:text-left'>Bringing Designs to Life in Pixels and Code</h3>
            <p className='text-md tablet:lg pb-5 text-center tablet:text-left'>Hi there, I am Praise Akintayo.<br />I design WebApps using React Js and Next Js</p>
            <div className="flex flex-row gap-4 text-md justify-center tablet:justify-start">
                <Link href='https://wa.link/l8cd8e' target='_blank' ><Button backgroundColor="bg-blue-500" label='Send a message' reactIcon={<RiMessage3Fill size={15} className='text-slate-200' />} /></Link>
                <button onClick={handleCopy} className='flex flex-row justify-center items-center gap-2 border border-blue-500 hover:bg-blue-400 p-1 rounded-sm text-xs text-white'>{text}{icon}</button>
                <Link href='https://drive.google.com/file/d/1ork-vWINiolN2JgjUdATuSxXEGRDn1PM/view?usp=drive_link' target='_blank'><Button backgroundColor="bg-blue-500" label='Resume' reactIcon={<GrDocumentPdf size={15} className='text-slate-200' />} /></Link>
            </div>
        </div>
        <div className='hidden tablet:flex flex-col gap-4 items-center text-white'>
            <div className='flex flex-row gap-2 py-0.5 px-3 bg-slate-800 rounded-xl'>
                <GoDotFill className='text-blue-500' />
                <p className='text-xs'>Available for job</p>
            </div>            
            <div className=''>
                <Image src={"/assets/images/profile.jpg"} alt='avatar' width={100} height={100} className='rounded-full' />
            </div>
        </div>
    </div>
  )
}

export default Hero