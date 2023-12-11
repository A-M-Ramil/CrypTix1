import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import UserMenuButton from './UserMenuButton';





export default async function Navbar() {
    const session =await getServerSession(authOptions)

  return (
<>
<nav data-theme="">
    <div className="  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="font-Sxbold btn btn-ghost text-5xl  flex-shrink-0">
                 <a href="/" className="">
                    CrypTix
                    </a>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                    
                

                    
                    <a href="/concert" className="btn btn-outline font-SxBold uppercase text-[1vw] tracking-wide font-bold hover:text-white px-3 py-2 rounded-md text-sm ">Concert</a>
                    <a href="/sport" className="btn btn-outline font-SxBold uppercase text-[1vw] tracking-wide font-bold hover:text-white px-3 py-2 rounded-md text-sm ">Sport</a>
                    <a href="/sch" className="btn btn-outline font-SxBold uppercase text-[1vw] tracking-wide font-bold hover:text-white px-3 py-2 rounded-md text-sm ">Search</a>
                    <UserMenuButton session={session} />
                </div>
            </div>
        </div>
    </div>
    </nav>
    </>
)
}