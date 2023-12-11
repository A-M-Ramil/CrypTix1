import { prisma } from "@/utils/prismaClient";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import  GoogleProvider  from "next-auth/providers/google";
import NextAuth from "next-auth/next";




export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter , 
    providers:[
        GoogleProvider(
            {
                clientId: process.env.GOOGLE_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!
            }
        )
    ]
}

const handler =NextAuth(authOptions);


export { handler as GET, handler as POST}