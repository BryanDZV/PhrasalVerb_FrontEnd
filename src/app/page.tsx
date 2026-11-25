"use client";
import { createGame } from "@/lib/api";
import { useState } from "react";
import { Game } from "@/types/Game";
import { GameBoard } from "@/components/GameBoard";

export default function Home() {
  const [game, setGame] = useState<Game | null>(null);
  async function handleClick(){
    try {
      const response= await createGame("TRANSLATION", 2);
      console.log("Response from API:", response);
      setGame(response);
    } catch (e) {
      console.error("Error fetching createGame:", e);
    }
  }
  return (
    <div>
      <h1>Welcome to the Game</h1>
      <button onClick={handleClick}>Fetch createGame </button>
      {game?(<div>
        <GameBoard cards={game.cards} />
       
      </div>
    ):( <p>No empieza la partida</p>)}
    </div>
  );
}