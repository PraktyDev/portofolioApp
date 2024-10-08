import Image from "next/image";
import Button from './Button';
import Link from 'next/link';
import { IoEye } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="hover:shadow-yellow-200 hover:shadow-sm flex flex-col gap-3 bg-slate-800  py-4 px-2 rounded-sm">
      <Image
        className="bg-slate-700 rounded-md object-cover w-full h-[300px] "
        width={1000}
        height={1000}
        src={props.src}
        alt="project image"
      />
      <div>
        <p className="text-yellow-200 text-lg">{props.name}</p>
        <p className="text-white text-sm">{props.description}</p>
      </div>

      <div className="flex justify-between text-md items-center">
        <Link href={props.github} target='_blank' ><Button backgroundColor="bg-blue-500" label='Github Repo' reactIcon={<FaGithub size={15} className='text-slate-200' />} /></Link>
        <Link href={props.link} target='_blank' ><Button backgroundColor="bg-blue-500" label='Live Demo' reactIcon={<IoEye size={15} className='text-slate-200' />} /></Link>
      </div>
    </div>
  );
};

export default ProjectCard;
