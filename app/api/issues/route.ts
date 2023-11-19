import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "../../ValidationSchemas";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";


export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) 
        return NextResponse.json({}, {status: 401});
    const body = await request.json();
    const validaton = issueSchema.safeParse(body);
    if(!validaton.success)
        return NextResponse.json(validaton.error.format(), {status: 400})
    const newIssue = await prisma.issue.create({
        data: {
            description: body.description,
            title: body.title
        }
    })
    return NextResponse.json(newIssue, {status: 201})
}