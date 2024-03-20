import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
import { parse } from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  //in a real app we fetch data from a db
  //if not found, return error 404, otherwise return data
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //Validate the request body
  const body = await request.json();
  const validation = schema.safeParse(body); //instead of standard if statement for the body
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  //If invalid, return 400 error, otherwise fetch the user with the given id.

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  //If the user doesn't exist return 404, if it does, update the user and return the updated user

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  //Fetch the user from db
  //If not found, return 404
  //Or delete the user if found and return 200

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.user.delete({
    where: { id: user.id },
  });
  return NextResponse.json({});
}
