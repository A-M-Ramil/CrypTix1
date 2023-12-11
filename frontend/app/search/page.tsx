import Concert from "@/components/Concert";
import { prisma } from "@/utils/prismaClient";
import { Metadata } from "next";
import Sport from "@/components/sports";
import Navbar from "@/components/Navbar";

interface SearchPageProps {
  searchParams: { query: string };
}

export function generateMetadata({
  searchParams: { query },
}: SearchPageProps): Metadata {
  return {
    title: `Search: ${query} - Cryptix`,
  };
}

export default async function SearchPage({searchParams: { query },}: SearchPageProps) {
  const concerts = await prisma.concert.findMany({
    where: {
      OR: [
        { name: { contains: query }},
        { venue: { contains: query }},
        { artist: { contains: query }}
       
      ],
    },
    orderBy: { id: "desc" },
  });

 

  const sports = await prisma.sports.findMany({
    where: {
      OR: [
        { name: { contains: query }},
        { venue: { contains: query } },
        { team1: { contains: query }},
        { team2: { contains: query }}
      ],
    },
    orderBy: { id: "desc" },
  });

  if (sports.length === 0 && concerts.length === 0 ){
    return <div className="text-center">No Events found</div>;
  }
  




  return (
    <main data-theme="retro" className="w-[100vw] h-[100vh] " >
      <Navbar />
      <div className="text-6xl font-bold text-center mt-40 font-Sregular mb-20">Search Results</div>
    <div className='mx-[20vw] font-Sregular'>
 <div className="text-4xl text-left font-bold mt-10 font-Sregular mb-10"> Concerts </div>

      {concerts.map((concert) => (
        <Concert concert={concert} key={concert.id} />
      ))}
    </div>

<div className='font-Sregular mx-[20vw]'>
 <div className="text-4xl text-left font-bold mt-10 font-Sregular mb-10"> Sports </div>
{sports.map((sport) => (
  <Sport Sport={sport} key={sport.id} />
))}
    </div>
    </main>
  );
}