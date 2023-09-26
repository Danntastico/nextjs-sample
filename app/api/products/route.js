import { NextResponse } from "next/server"

const API_LINK = 'https://dummyjson.com'

export async function GET() {
  const res = await fetch(`${API_LINK}/products`, {next: {revalidate: 2}})
  const data = await res.json()
 
  return NextResponse.json(data)
}