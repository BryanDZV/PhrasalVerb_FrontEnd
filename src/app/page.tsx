"use client";
import { createGame } from "@/lib/api";

export default function Home() {
  async function handleClick(){
    try {
      const response= await createGame("TRANSLATION", 2);
      console.log("Response from API:", response);
      
    } catch (e) {
      console.error("Error fetching createGame:", e);
    }
  }
  return (
    <div>
      <h1>Welcome to the Game</h1>
      <button onClick={handleClick}>Fetch createGame</button>
    </div>
  );
}