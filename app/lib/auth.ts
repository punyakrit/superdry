import User from "@/db/model/user";
import { connectMongoDb } from "@/lib/mongodb";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
      }),
    ],
    callbacks: {
      async signIn({ user }:any) {
        await connectMongoDb();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if(existingUser){
            return true;
          }
          if (!existingUser) {
            await User.create(user);
            return true; 
          } else {
            return false; 
          }
        } catch (e) {
          console.error("Server crashed:", e);
          throw new Error("Server crashed"); 
        }
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/",
    },
  };