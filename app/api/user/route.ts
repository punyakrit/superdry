import { authOptions } from "@/app/lib/auth"
import User from "@/db/model/user"
import { connectMongoDb } from "@/lib/mongodb"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req:NextRequest){
    const {name, email} = await req.json()

    await connectMongoDb()

    const user = await User.create({
        name,
        email
    })
    return NextResponse.json({
        message: "User created",
        user
    })
}


export async function GET() {
    try {
        await connectMongoDb();
        const session = await getServerSession();
        console.log(session)
        if (!session || !session.user || !session.user.email) {
            return NextResponse.json(("Session or user not found"));
        }

        const user = await User.findOne({ email: session.user.email });

        if (!user) {
            return NextResponse.json(("User not found"));
        }

        return NextResponse.json({
            user
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json(new Error("Failed to fetch user"));
    }
}