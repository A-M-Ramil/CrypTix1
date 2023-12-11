import Search from '@/components/search'
import Navbar from '@/components/Navbar'


export default function Page() {
  return (
    <main data-theme="coffee" >
        <Navbar />
    <div className='w-[100vw] h-[81vh] '>
        <div className='mt-[12vh] mb-28 tracking-wider leading-[.9] uppercase ml-[5vw] text-left font-Sxbold  text-9xl'> 
        Search <br/>
        anything

        </div>
        <div className='mx-[30vw]'>
      <Search />
      </div>
    </div>
    </main>
  )
}