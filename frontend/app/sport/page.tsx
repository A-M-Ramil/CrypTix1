import React from 'react'
import Sport from '@/components/sports'
import {prisma} from '@/utils/prismaClient'
import Navbar from '@/components/Navbar'



export default async function App() {
  const sports =await prisma.sports.findMany()
  return (
    
    <main className='font-Sregular  w-[100vw] h-[100vh]'>
      
    <div data-theme="lemonade">

    <Navbar />
    <section className="flex flex-col  w-full h-full">

      

      <div className="mt-[5vh] mb-28 tracking-wider leading-[.9] uppercase ml-[5vw] text-left font-Sxbold  text-9xl">
        Sports
      </div>

      <div className="mb-10 text-center font-Sregular text-4xl text-primary">
        Upcoming Sports Events
      </div>

    </section>




    <div className='mx-[20vw]'>
      
    {sports.map((sports)=>(
      <Sport Sport={sports} key={sports.id}/>
    ))}

    </div>
    </div>
</main>

    )
}

