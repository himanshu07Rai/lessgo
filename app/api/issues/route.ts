/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/prisma/client';
import { createIssueSchema } from '@/utils/validationSchemas';

export async function GET(req: NextRequest, res: NextResponse) {
  const issues = await prisma.issue.findMany();
  return NextResponse.json(issues, {
    status: 200,
  });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });
  }

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
      priority: body.priority,
    },
  });

  return NextResponse.json(newIssue, {
    status: 201,
  });
}
