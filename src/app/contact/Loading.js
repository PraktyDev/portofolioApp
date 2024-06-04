'use client'
import { MutatingDots } from 'react-loader-spinner'

export default function Loading(){
    return(
        <div className='flex justify-center items-center h-screen'>
            <div className='backdrop-blur-sm p-8 rounded-lg'>
                <MutatingDots visible={true} height='100' weight='100' color='#facc15' radius='12.5' secondaryColor='#fde047' />
            </div>
        </div>
    )
}