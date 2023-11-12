import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";


const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validaton = createIssueSchema.safeParse(body);
    if(!validaton.success)
        return NextResponse.json(validaton.error.errors, {status: 400})
    const newIssue = await prisma.issue.create({
        data: {
            description: body.description,
            title: body.title
        }
    })
    return NextResponse.json(newIssue, {status: 201})
}