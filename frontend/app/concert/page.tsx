import React from 'react'
import Concert from '@/components/Concert'
import {prisma} from '@/utils/prismaClient'
import Navbar from '@/components/Navbar'


export default async function App() {
  const concert =await prisma.concert.findMany()
  return (

    <main className='font-Sregular  w-[100vw] h-[100vh]'>

    <div data-theme="retro">

    <Navbar />
    <section className="flex flex-col  w-full h-full">



      <div className="mt-[5vh] mb-28 tracking-wider leading-[.9] uppercase ml-[5vw] text-left font-Sxbold  text-9xl">
        Concerts
      </div>

      <div className="mb-10 text-center font-Sregular text-4xl text-primary">
        Trending Concerts Worldwide
      </div>

    </section>




    <div className='mx-[20vw]'>
      
    {concert.map((concert)=>(
      <Concert concert={concert} key={concert.id}/>
    ))}

    </div>
    </div>
</main>

    )
}

