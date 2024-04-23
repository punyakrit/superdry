import User from "@/db/model/user";
import { connectMongoDb } from "@/lib/mongodb";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
