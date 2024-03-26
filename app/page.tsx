"use client"

import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { redirect } from "next/navigation"

export default async function Home(){
  // const session = await getServerSession(authOptions);


  if(!true) {
    return redirect("/login");
  } else {
    return redirect("/home");
  }
}