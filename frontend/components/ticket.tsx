import React from 'react'

import { prisma } from "@/utils/prismaClient";
import { Concert } from "@prisma/client";
import { concert } from '../../lib/data';

interface SearchPageProps {
  searchParams: { query: Number };
}

interface ConcertProps {
  concert_p: Concert;
}
export default async function Ticket({searchParams:{query},}:SearchPageProps) {
  const concerts =await prisma.concert.findMany(
    {
      where:{
        OR:[
        { id:   query }]
      }
    }
  )
 
 console.log(query)

    return (
      <>
      </>
      
    )
}

