import Image from 'next/image'
import Homepage from '@/components/Home'
import Navbar from "@/components/Navbar";







export default function Home() {
  return (
    <main data-theme="luxury" className='w-[100vw] h-[100vh]  font-Sregular'>
    <Navbar/>
    <div >
    <Homepage/>
    </div>
    </main>
  )
}
