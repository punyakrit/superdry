import User from "@/db/model/user"
import { connectMongoDb } from "@/lib/mongodb"
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
