import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const FORMSPREE_ID = process.env.FORMSPREE_ID;

    
    if (!FORMSPREE_ID) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

   
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 400 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
