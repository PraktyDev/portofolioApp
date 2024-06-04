import Link from 'next/link'
import { GoDotFill } from 'react-icons/go'

const Footer = () => {
  return (
    <footer className='bg-yellow-200 container mt-2 mx-auto flex rounded-md border-black border text-black font-semibold gap-1 p-4 justify-between items-center'>
        <div className='text-sm'>
            <p>Portfolio &copy; 2024</p>
        </div>
        <div>
          <div className='flex gap-4'>
              <Link className='text-xs tablet:text-sm bg-yellow-100 hover:bg-yellow-200 rounded-md py-1 px-2' href="https://www.linkedin.com/in/praise-akintayo-8a822b196" target="_blank">LinkedIn</Link>
              <Link className='text-xs tablet:text-sm bg-yellow-100 hover:bg-yellow-200 rounded-md py-1 px-2' href="https://wa.link/l8cd8e" target="_blank">WhatsApp</Link>
          </div>          
        </div>

        <div>
          <div className='flex flex-row gap-2 items-center'>
              <GoDotFill />
              <p className='text-sm '>Available for job</p>
          </div>          
        </div>

    </footer>
  )
}

export default Footer