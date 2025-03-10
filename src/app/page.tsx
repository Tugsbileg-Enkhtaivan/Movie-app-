'use client'
import { headers } from "next/headers";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { ACCESS_TOKEN } from "../constants";
export default function Home() {
  const getMovies = 
  useEffect(() => {
    const options = {
      method : "GET",
      headers :{
        accept: "application/json",
        Authorization : `Bearer ${ACCESS_TOKEN}`
      }
    }
  })
  return (
    <div>

    </div>
  );
}
