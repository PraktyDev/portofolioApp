import React from 'react'
import Hero from "@components/Hero"
import Body from '@components/Body'

const page = () => {
  return (
    <main className='container mx-auto h-full'>
      <Hero />
      <Body />
    </main>
  )
}

export default page