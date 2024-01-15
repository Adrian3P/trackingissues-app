import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //in a real app we fetch data from a db
  //if not found, return error 404, otherwise return data
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Adrian" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //Validate the request body
  const body = await request.json();
  const validation = schema.safeParse(body); //instead of standard if statement for the body
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  //If invalid, return 400 error, otherwise fetch the user with the given id.
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  //If the user doesn't exist return 404, if it does, update the user and return the updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //Fetch the user from db
  //If not found, return 404
  //Or delete the user if found and return 200

  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({});
}
